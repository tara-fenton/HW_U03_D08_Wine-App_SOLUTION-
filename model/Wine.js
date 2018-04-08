const db = require("./connection");
const Wine = {};

Wine.getAll = () => {
  return db.any("SELECT * FROM wine");
};

Wine.getBySlug = slug => {
  return db.one("SELECT * FROM wine WHERE slug = $1", [slug]);
};

module.exports = Wine;
