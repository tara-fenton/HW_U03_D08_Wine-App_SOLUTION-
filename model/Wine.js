const db = require("./connection");
const Wine = {};

Wine.getAll = () => {
  return db.any("SELECT * FROM wine");
};

module.exports = Wine;
