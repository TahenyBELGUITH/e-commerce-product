import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/products/products';
import "../styles/products.scss"

const Products = () => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='product' >
      <ul className='list-items'>
      { product.map((product)=>(
       <li key={product.id}>
        {/* <h1>{product.title}</h1>
          <p>{product.price}</p> */}
          <div className="img-wrapper">
            <img src={product.image}/>
          </div>
       </li>
      ))}
      </ul>
    </div>
  );
};

export default Products;
