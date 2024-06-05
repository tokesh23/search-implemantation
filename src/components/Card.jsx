import React from 'react';
import './Compo.css';

const Card = ({ image, price, title }) => (
  <div className="card">
    <img src={image} alt="Product" className='img' />
    <div className='id'>{image.id}</div>
    <div>${price}</div>
    <div>{title}</div>
  </div>
);

export default Card;
