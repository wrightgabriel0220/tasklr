const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})