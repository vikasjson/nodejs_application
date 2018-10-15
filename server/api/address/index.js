const express = require('express');

const route = express.Router();
const address = require('../address/address.controller');

route.get('/', address.index);
route.post('/', address.create);

module.exports = route;
