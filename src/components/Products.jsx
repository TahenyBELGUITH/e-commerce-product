import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillStarFill } from 'react-icons/bs';
import { fetchProducts } from '../redux/products/products';
import '../styles/products.scss';

const Products = () => {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="product">
      <ul className="list-items">
        {product.map((product) => (
          <li key={product.id}>
            <div className="img-wrapper">
              <img src={product.image} alt="awesome" />
            </div>
            <div className="product-info">
              <div className="product-inner">
                <h2>{product.title}</h2>
                <div className="inner">
                  <p>${product.price}</p>
                  <div className="icons">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
                </div>
              </div>
              <button type="button" className="btn">
                Add To Cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
