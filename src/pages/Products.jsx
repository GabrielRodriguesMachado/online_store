import React, { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import ListItens from '../components/ListItens';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategory, getProductsFromQuery } from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async (id) => {
    await getProductsFromCategory(id)
      .then((data) => setProducts(data.results));
  };

  useEffect(() => {
    const getFirstProducts = async () => {
      await getProductsFromCategory('MLB1051')
        .then((data) => setProducts(data.results));
    };
    getFirstProducts();
  }, []);

  const getProductsByQuery = async (query) => {
    await getProductsFromQuery(query)
      .then((data) => setProducts(data.results));
  };

  return (
    <div className="bg-slate-700 text-cyan-100 flex min-h-screen flex-col">
      <SearchBar getProductsByQuery={getProductsByQuery} />
      <div className="flex">
        <Categories getProducts={getProducts} />
        <ListItens products={products} />
      </div>
    </div>
  );
}

export default Products;
