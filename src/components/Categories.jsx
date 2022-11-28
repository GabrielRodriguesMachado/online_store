import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

function Categories({ getProducts }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <aside>
        <h2>Categorias</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button type="button" onClick={() => getProducts(category.id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

Categories.propTypes = {
  getProducts: PropTypes.func.isRequired,
};

export default Categories;
