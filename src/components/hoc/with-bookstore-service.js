import React, { useContext } from 'react';
import { BookstoreServiceContext } from '../bookstore-service-context';

const withBookstoreService = (Wrapped) => {
  return (props) => {
    const serviceProps = useContext(BookstoreServiceContext);
      return (
        <Wrapped {...props} bookstoreService={serviceProps} />
      );
    };
}
export default withBookstoreService;