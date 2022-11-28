import React from 'react';
import { array } from 'prop-types';

function ListItens({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

ListItens.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: array.isRequired,
};

export default ListItens;
