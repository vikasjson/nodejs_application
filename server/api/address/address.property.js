module.exports = DataTypes => ({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    address_1: DataTypes.STRING,
    address_2: DataTypes.STRING,

});
