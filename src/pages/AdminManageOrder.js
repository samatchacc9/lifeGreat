import React from 'react';
import SearchOrderForAdmin from '../components/Searchbar/SearchOrderForAdmin';
import TableManageOrderForAdmin from '../components/Table/TableManageOrderForAdmin';
import '../components/Container/ContainerStartColumn.css';
import Topic from '../components/Topic/Topic';
function AdminManageOrder() {
  return (
    <>
      <div className='container-start-column'>
        <Topic title={'จัดการใบสั่ง'} />
        {/* <SearchOrderForAdmin /> */}
        <TableManageOrderForAdmin />
      </div>
    </>
  );
}

export default AdminManageOrder;
