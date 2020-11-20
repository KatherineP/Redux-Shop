import './shopping-cart-table.css';
import React from 'react';
import { connect } from 'react-redux';
import { onDecrease, onDelete, bookAddedToCart } from '../../actions';


const ShoppingCartTable = ({ cartItems, orderTotal, onDecrease, onIncrease, onDelete }) =>{
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
    <tr key={id}>
        <th scope="row">{idx + 1}</th>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
            <button type="button" className="btn btn-outline-warning btn-sm float-center"
            onClick={() => onDecrease(id)}>
            <i className="remove fa fa-minus-circle"></i>
            </button>
  
            <button type="button" className="btn btn-outline-success btn-sm float-center"
            onClick={() => onIncrease(id)}>
            <i className="add fa fa-plus-circle"></i>
            </button>
  
            <button type="button" className="btn btn-outline-danger btn-sm float-center"
            onClick={() => onDelete(id)}>
            <i className="trash fa fa-trash-o"></i>
            </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="table-container">
      <div className="table-title">Your Order</div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item</th>
      <th scope="col">Count</th>
      <th scope="col">Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      { cartItems.map(renderRow) }
  </tbody>
</table>
<div className="total">
    Total: ${orderTotal}
</div>
    </div>
  )
};

const mapStateTopPops = ({ cartItems, orderTotal }) => {
  return {
    cartItems,
    orderTotal
  };
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: onDecrease,
    onDelete: onDelete
}

export default connect(mapStateTopPops, mapDispatchToProps)(ShoppingCartTable);