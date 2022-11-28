import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  const teste = (id) => {
    console.log(id);
  };

  return (
    <div>
      <aside>
        <h2>Categorias</h2>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              <button type="button" onClick={() => teste(category.id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Categories;
