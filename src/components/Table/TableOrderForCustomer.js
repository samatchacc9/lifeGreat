import React from 'react';
import Topic from '../Topic/Topic';
import './Table.css';
import '../Container/ContainerStartColumn.css';
import { useHistory, Link } from 'react-router-dom';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/orderContext';
import { AuthContext } from '../../contexts/authContext';

function TableOrderForCustomer() {
  const history = useHistory();
  let count = 1;
  const { order } = useContext(OrderContext);
  const { user } = useContext(AuthContext);
  // console.log(user);

  const handleDetailOrder = () => {
    history.push('/CustomerOrderDetail');
  };

  const currentUser = [...order].filter((order) => order.User.id === user.id);

  console.log(currentUser);
  // console.log(order);
  // console.log(order.User.id);
  // console.log(user.id);
  // const currentUser = [...order].filter((item) => item.id === user.id);

  // console.log(currentUser);

  return (
    // <div className='container-start-column'>
    <table>
      <caption>
        <Topic title={'Orders'} />
      </caption>
      <thead>
        <tr>
          <th scope='col'>ลำดับ</th>
          <th scope='col'>วันที่สั่ง</th>
          <th scope='col'>สถานะการชำระเงิน</th>
          <th scope='col'>ยอดรวม</th>

          {/* <th scope='col'>รายละเอียด</th> */}
        </tr>
      </thead>
      <tbody>
        {/* const result = words.filter(word => word.length > 6); */}
        {/* {order.filter(order.User.id === user.id) => } */}
        {/* {const newArrey= [...order].filter((item) => item.id === user.id)} */}
        {currentUser.map((order) => (
          <tr>
            <td data-label='ลำดับ'>{count++}</td>
            <td data-label='วันที่สั่ง'>{new Date(order.orderdate).toDateString()}</td>

            <td data-label='สถานะการชำระเงิน'>
              <font className={`${order.paymentstatus === 'COMPLETED' ? 'completed' : 'pending'}`}>
                {order.paymentstatus}
              </font>
            </td>
            <td data-label='ยอดรวม'>
              {order.OrderItems.reduce((acc, product) => +acc + +product.productprice * +product.qty, 0)} ฿
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
}

export default TableOrderForCustomer;
