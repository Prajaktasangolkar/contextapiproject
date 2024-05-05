import React from 'react';
import { useCard } from '../context/index';
import { useState, useEffect, } from 'react';
import './products.css'; // Import the CSS file
import { Link ,} from 'react-router-dom';

function Products() {
  const { added } = useCard();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching data from an API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const productsadd=(product)=>{
    added(product);
    console.log("Product added to cart:", product);
    console.log(product.id);
  }

  return (
    <div>
      <div style={{display:'flex',padding:'12px 12px 12px 12px'}}>
      <h2>Products</h2>
      <h2 style={{position:'absolute',right:'82px'}}>
        <Link to='/card'>Card</Link>
      </h2>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => productsadd(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
