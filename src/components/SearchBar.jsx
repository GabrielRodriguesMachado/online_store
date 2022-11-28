import React, { useState } from 'react';
import PropTypes from 'prop-types';

function SearchBar({ getProductsByQuery }) {
  const [query, setQuery] = useState('');

  return (
    <div className="items-center flex justify-center px-4 py-4">
      <input
        type="text"
        placeholder="Search"
        className="appearance-none block px-4 leading-tight text-gray-700 border border-gray-300 rounded-md py-3 mx-2 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <button
        type="button"
        className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700 transition duration-150 ease-in-out"
        onClick={() => getProductsByQuery(query)}
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  getProductsByQuery: PropTypes.func.isRequired,
};

export default SearchBar;
