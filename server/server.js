const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Request received!');
})

app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}`)
})