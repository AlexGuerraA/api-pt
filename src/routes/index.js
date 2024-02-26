const express = require('express');

const app = express();

const devRoutes = require('./dev.routes.js');

app.use('/devs', devRoutes);

module.exports = app;