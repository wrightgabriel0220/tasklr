const express = require('express');
const db = require('./../../database/controllers.js');
const schedules = express.Router();

schedules.get('/list', (req, res) => {
  db.getSchedulesAndTasks()
    .then(results => {
      let schedules = [];
      for (let row of results) {
        if (schedules.some(schedule => schedule.id === row.sid)) {
          schedules.forEach(schedule => {
            if (schedule.id === row.sid) {
              schedule.tasks.push({ id: row.tid, desc: row.description, date: row.date, start: row.start_time, duration: row.duration });
            }
          })
        } else {
          schedules.push({
            id: row.sid,
            span: row.span,
            start: row.start_date,
            end: row.end_date,
            tasks: [
              { id: row.tid, desc: row.description, date: row.date, start: row.start_time, duration: row.duration }
            ]
          });
        }
      }
      res.send(schedules);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

schedules.post('/add', (req, res) => {
  db.addSchedule(req.body.span, req.body.start, req.body.end)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

schedules.put('/:id/edit', (req, res) => {
  // don't worry about this for current scope
});

schedules.delete('/:id/delete', (req, res) => {
  db.deleteSchedule(req.params.id)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

module.exports = schedules;