import React from 'react';
import { Pagination } from 'rsuite';
import './PaginatonComponent.scss';

function PaginationComponent({ total, limit, activePage, setActivePage,maxButtons }) {
  // console.log(maxButtons);
<<<<<<< HEAD
  
=======

>>>>>>> daffc8cb5e27f4917e80e5e7ebd2df581a91e72f
  return (
    <div className="pagination-container">
      <Pagination
        prev
        next
<<<<<<< HEAD
<<<<<<< HEAD
=======
   
>>>>>>> 694838a796075c0380f1ab5d994d674196e1271b
        total={total}         
        limit={limit}         
        maxButtons={maxButtons}        
=======

        total={total}
        limit={limit}
        maxButtons={maxButtons}
>>>>>>> daffc8cb5e27f4917e80e5e7ebd2df581a91e72f
        activePage={activePage}
        onChangePage={setActivePage}
      />
    </div>
  );
}

<<<<<<< HEAD
<<<<<<< HEAD
export default PaginationComponent;
=======
export default PaginationComponent;
>>>>>>> 694838a796075c0380f1ab5d994d674196e1271b
=======
export default PaginationComponent;
>>>>>>> daffc8cb5e27f4917e80e5e7ebd2df581a91e72f
