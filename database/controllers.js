const { Client } = require('pg');
const client = new Client({
  database: 'tasklr'
});

client.connect()
  .then(() => {
    console.log('Connected successfully to db tasklr!');
  })
  .catch(err => {
    console.error(err);
  });

const getAllFrom = tableName => {
  return client.query(`SELECT * FROM ${tableName}`)
    .then(results => {
      return results.rows;
    }).catch(err => {
      return err;
    })
};

const addSchedule = (span, start, end) => {
  return client.query('INSERT INTO schedules (span, start_date, end_date) VALUES ($1, $2, $3)', [span, start, end])
  .then(results => {
      return results;
    }).catch(err => {
      return err;
    })
};

const addTask = (description, parent_schedule, start_time, duration) => {

};

const deleteSchedule = (id) => {

};

const deleteTask = (id) => {

};

module.exports = { getAllFrom, addSchedule, addTask, deleteSchedule, deleteTask };