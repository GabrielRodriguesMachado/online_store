import React, { useState } from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';
import { getProductsFromCategory } from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  const getProducts = async (id) => {
    const productsFromCategory = await getProductsFromCategory(id);
    setProducts(productsFromCategory.results);
    console.log([products]);
  };

  return (
    <div className="bg-slate-700 text-cyan-100 flex min-h-screen flex-col">
      <SearchBar />
      <Categories getProducts={getProducts} />
    </div>
  );
}

export default Products;
