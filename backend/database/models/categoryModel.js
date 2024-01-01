const { DataTypes } = require("sequelize");
const sequelize = require("../config.js");

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT('long'),
    allowNull: true,
  },
});

module.exports = Category;
