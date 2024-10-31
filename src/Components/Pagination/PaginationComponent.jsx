import React from 'react';
import { Pagination } from 'rsuite';
import './PaginatonComponent.scss';

function PaginationComponent({ total, limit, activePage, setActivePage,maxButton }) {
  return (
    <div className="pagination-container">
      <Pagination
        prev
        next
   
        total={total}         
        limit={limit}         
        maxButtons={maxButton}        
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  );
}

export default PaginationComponent;
