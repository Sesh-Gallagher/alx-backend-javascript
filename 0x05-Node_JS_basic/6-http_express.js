/*
 * Function to Install Express and in a file named 6-http_express.js
 */

const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
