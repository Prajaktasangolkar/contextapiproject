import React from 'react';
import { useCard } from '../context';
import { Link } from 'react-router-dom';

function Card({ card }) {
   const {remove}= useCard()
  return (
    <div>
      <h2>Card Page</h2>
      <div>
        {card.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          card.map((product, index) => (
            <div key={index}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => remove(product.id)}>remove</button>
            </div>
          ))
        )}
      </div>
      <button style={{backgroundColor:'red',position:'absolute',left:'52px'}}><Link to='/'>Back</Link></button>
    </div>
  );
}

export default Card;
