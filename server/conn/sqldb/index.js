const config = require('../../config/environment');

const _ = require('lodash');
const Sequelize = require('sequelize');

const sqlDefaults = {
    dialect: 'mysql',
    timezone: '+05:30',
    dialectOptions: {
        decimalNumbers: true,
    },
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci',
        },
    },
};

const db = {
    Sequelize,
    sequelize: new Sequelize(config.MYSQL, sqlDefaults),
};

[
    // - User
    'User',

    // - Address
    'Address'

].forEach((model) => {
    db[model] = db.sequelize.import(`../../api/${_.camelCase(model)}/${_.camelCase(model)}.model.js`);
});

Object.keys(db).forEach((modelName) => {
    if ('associate' in db[modelName]) {
        db[modelName].associate(db);
    }
});

module.exports = db;


