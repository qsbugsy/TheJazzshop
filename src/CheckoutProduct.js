import React from 'react';
import './checkoutProduct.css';
import {useStateValue} from './StateProvider.js';

function CheckoutProduct({ id, title, image, price, rating}) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET" ,
      id: id,
    })
  }
return (
  <div className='checkoutProduct'>
  <div className='checkoutLeft'>
<img src={image} alt='' />
<div className='checkoutProduct__info'>
<p className='checkoutProduct_title'>{title}</p>
<p className='checkoutProduct_price'>
<small>$</small>
<strong>{price}</strong>
</p>
<div className='checkoutProduct_rating'>
{Array(rating)
.fill()
.map((_) => (
  <p>⭐️</p>
))}
</div>
<button onClick={removeFromBasket}>Remove from basket</button>
</div>
</div>
  </div>

);
}

export default CheckoutProduct;
