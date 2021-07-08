const express = require('express');
const path = require('path');
const schedules = require('./routes/schedules.js');
const db = require('./../database/controllers.js');

const app = express();
const port = 3000;

app.use('/schedules', schedules);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})