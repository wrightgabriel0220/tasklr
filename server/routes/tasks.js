const express = require('express');
const db = require('./../../database/controllers.js');
const tasks = express.Router();

tasks.get('/list', (req, res) => {
  db.getAllFrom('tasks')
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

tasks.post('/add', (req, res) => {
  db.addTask(req.body.description, req.body.schedID, req.body.date, req.body.start, req.body.duration)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

tasks.put('/:id/edit', (req, res) => {
  // don't worry about this for current scope
});

tasks.delete('/:id/delete', (req, res) => {
  db.deleteTask(req.params.id)
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

module.exports = tasks;