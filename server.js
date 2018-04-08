const express = require("express");
const cors = require("cors");
const app = express();
const Wine = require("./model/Wine");

const PORT = 4567;
app.use(cors());

app.get("/api/wine", (request, response) => {
  Wine.getAll().then(wines => {
    response.json(wines);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
