const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize;
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_products_search_db');

const Product = conn.define('product', {
  name: {
    type: STRING
  },
  inStock: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
});

module.exports = {
  Product,
  conn
};
