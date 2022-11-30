import React from 'react';
import { array } from 'prop-types';
import { Link } from 'react-router-dom';

function ListItens({ products }) {
  return (
    <div className="grid place-items-center min-h-screen w-full">
      <div className="grid p-4 max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {products.map((product) => (
          <div className="h-max-w-sm rounded overflow-hidden shadow-lg">
            <Link key={product.id} to={`/product_details/${product.id}`}>
              <img className="w-full" src={product.thumbnail} alt={product.title} />
              <div>
                <h3 className="font-bold text-xl mb-2">{product.title}</h3>
                <p className="text-base">{product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

ListItens.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  products: array.isRequired,
};

export default ListItens;
