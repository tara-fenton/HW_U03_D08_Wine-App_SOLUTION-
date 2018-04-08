const db = require("./connection");
const Wine = {};

Wine.getAll = () => {
  return db.any("SELECT * FROM wine");
};

Wine.getBySlug = slug => {
  return db.one("SELECT * FROM wine WHERE slug = $1", [slug]);
};

Wine.create = wine => {
  return db.one(
    `
    INSERT INTO wine (name, slug, year, country, description, price, picture_url)
    VALUES (
      $1,
      $2,
      $3,
      $4,
      $5,
      $6,
      $7
    )
    RETURNING *`,
    [
      wine.name,
      wine.slug,
      wine.year,
      wine.country,
      wine.description,
      wine.price,
      wine.picture_url
    ]
  );
};

Wine.deleteBySlug = slug => {
  return db.result("DELETE FROM wine WHERE slug = $1", [slug]);
};

Wine.update = wine => {
  return db.none(
    `
    UPDATE wine SET name = $1, slug = $2, year = $3, country = $4,
    description = $5, price = $6, picture_url = $7 WHERE id = $8
    `,
    [
      wine.name,
      wine.slug,
      wine.year,
      wine.country,
      wine.description,
      wine.price,
      wine.picture_url,
      wine.id
    ]
  );
};
module.exports = Wine;
