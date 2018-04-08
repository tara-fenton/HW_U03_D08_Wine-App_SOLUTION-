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
export { fetchAllWines, fetchWineBySlug };
