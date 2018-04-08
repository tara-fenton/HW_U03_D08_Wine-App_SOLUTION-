const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Wine = require("./model/Wine");

const PORT = 4567;
app.use(cors());

const jsonParser = bodyParser.json();

app.get("/api/wine", (request, response) => {
  Wine.getAll().then(wines => {
    response.json(wines);
  });
});

app.get("/api/wine/:slug", (request, response) => {
  const { slug } = request.params;
  Wine.getBySlug(slug).then(wine => {
    response.json(wine);
  });
});

app.post("/api/wine", jsonParser, (request, response) => {
  const wine = request.body;
  wine.year = Number(wine.year);
  wine.price = Number(wine.price);
  Wine.create(wine).then(wine => {
    response.json(wine);
  });
});

app.delete("/api/wine/:slug", (request, response) => {
  const { slug } = request.params;
  Wine.deleteBySlug(slug).then(wine => {
    response.json({ message: "ok" });
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
