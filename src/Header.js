import React from 'react';
import "./Header.css";
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';



function Header() {
  const [{basket}] = useStateValue();

  console.log(basket);
  return(
  <nav className="header">
  <Link to="/">
  <div className="header_name">
  <h1>Lets Shop</h1>
  </div>
  </Link>
  <div className='header_searchContainer'>
  <input type="text" className="header_inputSearch"></input>
  <SearchIcon className="header_searchIcon" />
  </div>
  <div className='header_nav'>
  <Link to="/login" className="header_link">
  <div className="header-option">
  <span className="header_optionLineOne">Hello</span>
  <span className="header_optionLineTwo">Sign In</span>
  </div>
  </Link>
  <Link to="/" className="header_link">
  <div className="header-option">
  <span className="header_optionLineOne">Return</span>
  <span className="header_optionLineTwo">& Orders</span>
  </div>
  </Link>
  <Link to="/" className="header_link">
  <div className="header-option">
  <span className="header_optionLineOne">Your</span>
  <span className="header_optionLineTwo">Prime</span>
  </div>
  </Link>
  <Link to="/checkout" className="header_link">
  <div className="header-optionBasket">
  <ShoppingBasketIcon/>
  <span>{basket?.length}</span>
  </div>
  </Link>
  </div>
  </nav>
);
}

export default Header;
