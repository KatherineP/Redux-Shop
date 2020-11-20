import './shop-header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShopHeader = ({ orderTotal }) => {
  return (
    <header className="header d-flex">
      <Link to="/"> 
        <div className="header-title">ReStore</div>
      </Link>
      <Link to="/cart"> 
      <div className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        ${orderTotal}
      </div>
      </Link>
    </header>
  )
}

const mapStateTopPops = ({ orderTotal }) => {
  return {
    orderTotal
  };
};

export default connect(mapStateTopPops)(ShopHeader);