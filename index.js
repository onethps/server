const users = require('./users-router');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const mongooseConnectLink = process.env.REACT_APP_MONGOOSE_CONNECT_LINK;

mongoose
  .connect(mongooseConnectLink)
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
app.use('/', users);

app.use((req, res) => {
  res.send({
    value: 404,
  });
});

app.listen(port);
