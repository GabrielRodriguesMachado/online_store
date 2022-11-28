import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

function Categories() {
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
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export default Categories;
