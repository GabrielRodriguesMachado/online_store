import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';

function ListItens({ products }) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <Link key={product.id} to={`/product_details/${product.id}`}>
            <li>
              <h3>{product.title}</h3>
              <img src={product.thumbnail} alt={product.title} />
              <p>{product.price}</p>
            </li>
          </Link>
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
