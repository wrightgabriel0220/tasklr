const express = require('express');
const db = require('./../../database/controllers.js');
const schedules = express.Router();

schedules.get('/list', (req, res) => {
  db.getAllFrom('schedules')
    .then(results => {
      res.send(results);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.end();
    })
});

schedules.post('/create', (req, res) => {

});

schedules.put('/:id/edit', (req, res) => {

});

schedules.delete('/:id/delete', (req, res) => {

});

module.exports = schedules;