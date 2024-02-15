const express = require('express');

const route = express.Router();
route.use('/', express.static('manual'));

module.exports = route;
