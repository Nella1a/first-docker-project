// import express
const express = require('express');

// create an instance of the app object in express
const app = express();

// add port variable
const port = 9000;

app.get('/', function (req, res) {
  res.send('GET request to homepage');
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
