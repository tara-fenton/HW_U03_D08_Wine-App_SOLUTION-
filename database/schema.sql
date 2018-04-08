CREATE DATABASE wine;

\c wine

DROP TABLE wine;

CREATE TABLE wine (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  slug VARCHAR(255),
  year INTEGER,
  country VARCHAR(255),
  description TEXT,
  price INTEGER,
  picture_url TEXT
);
