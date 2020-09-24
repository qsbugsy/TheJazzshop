import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import './App.css';
import Login from './Login.js';
import {useStateValue} from './StateProvider.js';
import {auth} from './firebase.js';

function App() {
  const [dispatch] = useStateValue();

  useEffect(() => {
  const unsubcribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch ({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route path="/checkout">
    <Header />
    <Checkout />
    </Route>
    <Route path="/login">
    <Login />
    </Route>
    <Route path="/">
    <Header></Header>
    <Home></Home>
    </Route>
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
