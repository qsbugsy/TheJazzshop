import React from 'react';
import { useStateValue} from './StateProvider.js';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className='checkout'>

  {basket?.length === 0 ?(
    <div>
    <h2>Your Shopping Basket is empty</h2>
    <p> Youhave no items in your basket. To buy an item click "Add to basket" next to the item.</p>
    </div>
  ):(
    <div >
    <h2 className="checkout__title">Your Shopping Basket</h2>
    {basket?.map((item) => {
      return (
      <CheckoutProduct
       item={item.id}
       title={item.title}
       image={item.image}
       price={item.price}
       rating={item.rating}
      />
    );
    })}
    </div>

  )}

   {basket.length > 0 &&
    <div className="checkoutRight">
    <Subtotal/>
    </div>
  }
  </div>
);
}

export default Checkout;
