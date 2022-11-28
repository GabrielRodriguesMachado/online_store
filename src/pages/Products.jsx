import React from 'react';
import Categories from '../components/Categories';
import SearchBar from '../components/SearchBar';

function Products() {
  return (
    <div className="bg-slate-700 text-cyan-100 flex min-h-screen flex-col">
      <SearchBar />
      <Categories />
    </div>
  );
}

export default Products;
