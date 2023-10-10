const express = require('express');

//todo Import our modular routers for other js files
const animalsRouter = require('./animals');
const foodRouter = require('./food');
const ecoRouter = require('./eco');

const app = express();

app.use('/animals', animalsRouter);
app.use('/food', foodRouter);
app.use('/eco', ecoRouter);

module.exports = app;