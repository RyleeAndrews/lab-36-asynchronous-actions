'use strict';

const jsonParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').load();
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/36');

const app = require('express')();
app.use(cors());
app.use(jsonParser.json());
app.use(require(__dirname + '/routes/sushiRoute.js'));
app.use((err,req,res,next) => {
  console.log(err);
  res.status( 500|| err.statusCode).send(err.message || 'server error');
});

app.listen(process.env.PORT || 3000);
