import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

function Categories({ getProducts }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="hidden md:flex min-w-max m-4">
      <aside>
        <h2 className="font-bold">Categorias</h2>
        {categories.map((category) => (
          <div className="m-1" key={category.id}>
            <button type="button" onClick={() => getProducts(category.id)}>
              {category.name}
            </button>
          </div>
        ))}
      </aside>
    </div>
  );
}

Categories.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default Categories;
