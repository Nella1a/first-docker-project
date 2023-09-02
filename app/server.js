// import express
const express = require('express');

// create an instance of the app object in express
const app = express();

// add port variable
const port = 5000;

app.get('/', function (req, res) {
  res.send('GET request to homepage');
});
