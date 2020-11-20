const initialState = {
  books: [], 
  loading: true, 
  error: null,
  cartItems: [],
  orderTotal: 0

};

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1)
    ];
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartTotal = (orderTotal, bookPrice, actionType = 'addToCart', itemTotal) => {
  const totalItems = orderTotal + bookPrice;
  const totalItemsDecrease = orderTotal - bookPrice;
  const totalItemsDelete = orderTotal - itemTotal;
  
  if (actionType === 'decreaseCartItems'){
    return totalItemsDecrease;
  } 
  
  if (actionType === 'deleteCartItems'){
    return totalItemsDelete;
  }

  return totalItems;
};

const updateCartItem = (book, item = {}, quantity) => {

  const {
    id = book.id,
    count = 0,
    title = book.title,
    total = 0 
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  };
};

const updateOrder = (state, bookId, quantity, actionType) => {
  const { books, cartItems, orderTotal } = state;

  const book = books.find(({id}) => id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  let cartTotal;
  if(item) {
    console.log(item);
    cartTotal = updateCartTotal(orderTotal, book.price, actionType, item.total);
  } else {
    cartTotal = updateCartTotal(orderTotal, book.price, actionType);
  }
  
  return {
    ...state,
    orderTotal: cartTotal,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),

  };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'BOOKS_LOADED':
        return {
          ...state,
          books: action.payload,
          loading: false,
          error: null,
        };
      case 'BOOKS_REQUESTED':
          return {
            ...state,
            loading: true,
            books: [],
            error: null,
          };
      case 'BOOKS_ERROR':
          return {
            ...state,
            books: [],
            loading: false,
            error: action.payload,
          };
      case 'BOOK_ADDED_TO_CART':
        return updateOrder(state, action.payload, 1, 'addToCart');
      case 'ON_DECREASE':
        return updateOrder(state, action.payload, -1, 'decreaseCartItems');
      case 'ON_DELETE':
        const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count, 'deleteCartItems');
      default:
          return state
    }
};

export default reducer;