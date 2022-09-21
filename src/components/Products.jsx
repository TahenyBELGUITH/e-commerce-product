import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/products';

const Products = () => {
  const product = useSelector((state) => state.products);
  console.log(product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="app">
      <h1>hgggjjh</h1>
    </div>
  );
};

export default Products;
