// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define column 1
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    // define column 2
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define column 3
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isdecimal: true
      }
    },
    // define column 4
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: [10],
      validate: {
        isNumeric: true
      }
    },
    // define column 5
    category_id : {
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
