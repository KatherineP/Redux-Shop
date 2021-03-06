import './book-list.css';
import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc';
import { booksLoaded, booksRequested, booksError, bookAddedToCart } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {
        books.map((book) => 
        <li key={book.id}>
          <BookListItem 
          book={book}
          onAddedToCart={() => onAddedToCart(book.id)}/>
        </li>)
      }
    </ul>
  )
}

class BookListContainer extends Component {

  componentDidMount() {
  this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />
    }
    if (error) {
      return <ErrorIndicator />
    }
    return <BookList books={books} onAddedToCart={onAddedToCart}/>
    
  }
}

const mapStateToProps = ({ books, loading, error}) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: () => {
      dispatch(booksRequested());
      bookstoreService.getBooks()
      .then((data) => dispatch(booksLoaded(data)))
      .catch((err) => dispatch(booksError (err)));
    },
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
}


export default withBookstoreService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));