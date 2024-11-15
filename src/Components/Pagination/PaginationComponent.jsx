import React from 'react';
import { Pagination } from 'rsuite';
import './PaginatonComponent.scss';

function PaginationComponent({ total, limit, activePage, setActivePage, maxButtons }) {
  return (
    <div className="pagination-container">
      <Pagination
        prev
        next
        total={total}
        limit={limit}
        maxButtons={maxButtons}
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  );
}

export default PaginationComponent;
