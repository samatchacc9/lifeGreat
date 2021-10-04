import React from 'react';
import '../components/Container/ContainerCover.css';
import '../components/Container/ContainerStartColumn.css';
import TableManageProductForAdmin from '../components/Table/TableManageProductForAdmin';
import Topic from '../components/Topic/Topic';
function AdminManageProduct() {
  return (
    <>
      <div className='container-start-column'>
        <Topic title={'จัดการสินค้า'} />
        <div className='container-hz'>
          {/* <div className='container-start-column'> */}
          <TableManageProductForAdmin />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default AdminManageProduct;
