const express = require('express');
const db = require('./../../database/controllers.js');
const schedules = express.Router();

schedules.get('/list', (req, res) => {
  db.getSchedulesAndTasks()
    .then(results => {
      res.send(results);
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