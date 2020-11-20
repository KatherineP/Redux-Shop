import './book-list-item.css';
import React from 'react';


const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="book-list-item d-flex">
      <div className="book-list-item-cover">
        <img src={coverImage} alt="book"/>
      </div>
      <div className="book-list-item-info">
        <span className="book-title">{title}</span>
        <div className="book-author">{ author }</div>
        <div className="book-price">${ price }</div>
        <button type="button" className="btn btn-info" onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookListItem;