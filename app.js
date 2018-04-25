const express = require('express');
const calcRouter = require('./routes/calc');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/calc', calcRouter);

module.exports = app;
