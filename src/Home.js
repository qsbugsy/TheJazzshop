import React from 'react';
import Product from './Product.js';
import './Home.css';

function Home() {
return (
  <div className="home">
  <img className="home_image"
  src= "https://images-na.ssl-images-amazon.com/images/I/41G6zxxNH5L.png"
  alt=""
  />

<div className="home_row">
<Product
id="1"
title="basketball"
price={10.00}
rating={3}
image="https://images-na.ssl-images-amazon.com/images/I/81r3ceKvXlL._AC_SY355_.jpg"/>

<Product
id="2"
title="baseball"
price={8.00}
rating={4}
image="https://s.clipartkey.com/mpngs/s/86-866383_transparent-baseball-seams-png-christian-yelich-autographed-baseball.png"
/>
</div>
</div>
);
}

export default Home;
