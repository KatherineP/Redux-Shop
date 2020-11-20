import React from 'react';
import './app.css';
import { CartPage, HomePage } from '../pages';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {
  return (
    <main role="main" className="container">
      < ShopHeader/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/cart" component={CartPage}/>
      </Switch>
    </main>
  )
}
export default App;