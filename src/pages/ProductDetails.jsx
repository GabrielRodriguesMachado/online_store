import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsFromId, getProductsFromIdDescription } from '../services/api';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [description, setDescription] = useState({ description: null });

  const getDetails = async () => {
    getProductsFromId(id).then((response) => setProduct(response));
    getProductsFromIdDescription(id)
      .then((response) => setDescription({ description: response }));
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{`${product.currency_id} ${product.price}` }</p>
      <p>{`condição ${product.condition}`}</p>
      <p>{`vendidos ${product.sold_quantity}`}</p>
      {product.warranty && <p>{`Garantia: ${product.warranty}`}</p>}
      {description.description && <p>{description.description.plain_text}</p>}
    </div>
  );
}

export default ProductDetails;
