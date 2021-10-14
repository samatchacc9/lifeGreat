import React from 'react';
import Topic from '../Topic/Topic';
import './Table.css';
import '../Container/ContainerStartColumn.css';
import { useHistory, Link } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/orderContext';
import { formatShortMonthShortYear } from '../../services/date';

function TableManageOrderForAdmin() {
  let count = 1;
  const { order } = useContext(OrderContext);

  // console.log(order);

  const sortOrder = [...order].sort((a, b) => b.id - a.id);

  const history = useHistory();

  const handleClickUpdate = () => {
    history.push('/AdminUpdateOrder');
  };

  return (
    // <div className='container-start-column'>
    <table>
      {/* <caption>
        <Topic title={'จัดการใบสั่ง'} />
      </caption> */}
      <thead>
        <tr>
          <th scope='col'>ลำดับ</th>
          <th scope='col'>ชื่อ-สกุล</th>
          <th scope='col'>วันที่สั่ง</th>
          <th scope='col'>สถานะชำระเงิน</th>
          <th scope='col'>ยอดรวม</th>

          <th scope='col'>อัพเดท</th>
        </tr>
      </thead>
      <tbody>
        {sortOrder.map((order) => (
          <tr key={order.id}>
            <td data-label='ลำดับ'>{count++}</td>
            <td data-label='ชื่อ-สกุล'>
              {order.User.firstname} {order.User.lastname}
            </td>
            <td data-label='วันที่สั่ง'>{new Date(order.orderdate).toDateString()}</td>
            {/* <div>{new Date(value).toString()}</div> */}
            {/* new Date('05 October 2011 14:48 UTC'); */}
            <td data-label='สถานะ'>
              <font className={`${order.paymentstatus === 'COMPLETED' ? 'completed' : 'pending'}`}>
                {order.paymentstatus}
              </font>
            </td>
            <td data-label='ยอดรวม'>
              {order.OrderItems.reduce((acc, product) => +acc + +product.productprice * +product.qty, 0)}
            </td>

            <td data-label='Edit'>
              <Link to={{ pathname: `/AdminUpdateOrder/${order.id}`, state: order }} className='button-table blue'>
                <i className='fas fa-wrench' onClick={handleClickUpdate}></i>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
}

export default TableManageOrderForAdmin;
