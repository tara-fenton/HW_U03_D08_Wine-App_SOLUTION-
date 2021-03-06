const fetchAllWines = () => {
  return fetch(`http://localhost:4567/api/wine`).then(response =>
    response.json()
  );
};

const fetchWineBySlug = slug => {
  return fetch(`http://localhost:4567/api/wine/${slug}`).then(response =>
    response.json()
  );
};

const createWine = wine => {
  const body = wine;
  return fetch(`http://localhost:4567/api/wine/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
};

const deleteWineBySlug = slug => {
  return fetch(`http://localhost:4567/api/wine/${slug}`, {
    method: "DELETE"
  }).then(response => response.json());
};

const updateWine = wineUpdates => {
  const body = wineUpdates;
  return fetch(`http://localhost:4567/api/wine/${wineUpdates.slug}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());
};

export {
  fetchAllWines,
  fetchWineBySlug,
  createWine,
  deleteWineBySlug,
  updateWine
};
