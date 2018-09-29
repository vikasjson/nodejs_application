const express = require('express');

const route = express.Router();
const address = require('../address/address.controller');

route.get('/', address.index);

module.exports = route;
