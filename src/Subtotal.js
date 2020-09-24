import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer.js';
import {useStateValue} from './StateProvider.js';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
  <CurrencyFormat
  renderText={(value) => (
    <>
    <p>
    Subtotal ({basket.length} items): <strong> {` ${value}`}</strong>
    </p>
    <small className="subtotal_gift">
    <input type="checkbox" /> This order contains
    </small>
    </>
  )}
  decimalScale={2}
  value={getBasketTotal(basket)}
  displayText={"text"}
  thousandSeperator={true}
  prefix={"$"}
  />
<button>Proceed to Checkout</button>
  </div>
);
}

export default Subtotal;
