const express = require('express');

const route = express.Router();
const controller = require('../../api/user/user.controller');

route.get('/', controller.index);

module.exports = route;

