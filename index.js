const users = require('./users-router');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://onethps:wwwwww@cluster0.kbfdi.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB ok');
  })
  .catch((err) => console.log('DB error', err));

const app = express();
const port = 7542;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// settings routes
app.use(cors());
app.use('/home-new', users);

app.use((req, res) => {
  res.send({
    value: 404,
  });
});

app.listen(port);
