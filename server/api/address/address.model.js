const properties = require('./address.property');

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', properties(DataTypes), {
        tableName: 'addresses',
        timestamps: true,
        underscored: true,
        paranoid: true,
    });

    Address.associate = (db) => {
        Address.belongsTo(db.User, {
            foreignKey: 'user_id',
            as: 'User',
        });
    };

    return Address;
};
