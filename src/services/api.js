export const getCategories = () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url).then((response) => response.json());
};

export const getProductsFromQuery = (query) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(url).then((response) => response.json());
};

export const getProductsFromCategory = (categoryId) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  return fetch(url).then((response) => response.json());
};

export const getProductsFromId = (productId) => {
  const url = `https://api.mercadolibre.com/items/${productId}`;
  return fetch(url).then((response) => response.json());
};

export const getProductsFromIdDescription = (productId) => {
  const url = `https://api.mercadolibre.com/items/${productId}/description`;
  return fetch(url).then((response) => response.json());
};
