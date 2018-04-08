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

export { fetchAllWines, fetchWineBySlug, createWine };
