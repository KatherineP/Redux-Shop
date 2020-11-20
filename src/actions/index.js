
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED',
  };
};

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload: error
  };
};

export const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
}

const onIncrease = (bookId) => {
  return {
    type: 'ON_INCREASE',
    payload: bookId
  };
}

const onDecrease = (bookId) => {
  return {
    type: 'ON_DECREASE',
    payload: bookId
  }
}

const onDelete = (bookId) => {
  return {
    type: 'ON_DELETE',
    payload: bookId
  }
}

export { booksLoaded, booksRequested, booksError, onIncrease, onDecrease, onDelete };