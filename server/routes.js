
const express = require('express');

const user = require('./api/user');
const address = require('./api/address');

module.exports = (app) => {
    app.use('/api/users', user);
    app.use('/api/address', address);
    // All undefined asset or api routes should return a 404
    app.use((e, req, res, next) => {
        if (!next) return null;
        const err = e;
        // const { body, headers, user: u } = req;

        // logger.error(err.message, err, {
        //   url: req.originalUrl,
        //   body,
        //   headers,
        //   user: u,
        // });

        return res.status(500).json({ message: err.message, stack: err.stack });
    });
};
