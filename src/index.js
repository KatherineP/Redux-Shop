import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service'
import { BookstoreServiceContext } from './components/bookstore-service-context';
import store from './store';
import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BookstoreServiceContext.Provider value={ bookstoreService }>
        <Router>
          <App />
        </Router>
      </BookstoreServiceContext.Provider>
    </ErrorBoundary>
  </Provider>, 
  document.getElementById('root'));