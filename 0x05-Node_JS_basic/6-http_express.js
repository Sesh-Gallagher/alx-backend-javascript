/*
 * Function to Install Express and in a file named 6-http_express.js
 */

const express = require('express');
const app = express();
const PORT = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
