import React from 'react';
import TableManageCategoryForAdmin from '../components/Table/TableManageCategoryForAdmin';
import Topic from '../components/Topic/Topic';
import '../components/Container/ContainerStartColumn.css';

function AdminManageCategory() {
  return (
    <>
      <div className='container-start-column'>
        <Topic title={'จัดการประเภท'} />
        <div className='container-hz'>
          <TableManageCategoryForAdmin />
        </div>
      </div>
    </>
  );
}

export default AdminManageCategory;
