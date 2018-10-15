const properties = require('./user.property');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', properties(DataTypes), {
    tableName: 'users',
    timestamps: true,
    underscored: true,
    paranoid: true,
  });

  User.associate = (db) => {
    User.hasMany(db.Address, {
      foreignKey: 'customer_id',
    });
  };

  return User;
};
