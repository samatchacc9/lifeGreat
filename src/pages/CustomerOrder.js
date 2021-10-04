import React from 'react';
import TableOrderForCustomer from '../components/Table/TableOrderForCustomer';
import '../components/Container/ContainerStartColumn.css';
import Topic from '../components/Topic/Topic';

function CustomerOrder() {
  return (
    <div className='container-start-column'>
      {/* <Topic title={'ใบสั่งซื้อ'} /> */}
      <TableOrderForCustomer />
    </div>
  );
}

export default CustomerOrder;
