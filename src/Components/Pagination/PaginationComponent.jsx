import React from 'react';
import { Pagination } from 'rsuite';
import './PaginatonComponent.scss';

function PaginationComponent({ total, limit, activePage, setActivePage,maxButton }) {
  return (
    <div className="pagination-container">
      <Pagination
        prev
        next
<<<<<<< HEAD
=======
   
>>>>>>> 694838a796075c0380f1ab5d994d674196e1271b
        total={total}         
        limit={limit}         
        maxButtons={maxButton}        
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  );
}

<<<<<<< HEAD
export default PaginationComponent;
=======
export default PaginationComponent;
>>>>>>> 694838a796075c0380f1ab5d994d674196e1271b
