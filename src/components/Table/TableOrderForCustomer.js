import React from 'react';
import Topic from '../Topic/Topic';
import './Table.css';
import '../Container/ContainerStartColumn.css';
import { useHistory } from 'react-router-dom';

function TableOrderForCustomer() {
  const history = useHistory();

  const handleDetailOrder = () => {
    history.push('/CustomerOrderDetail');
  };

  return (
    // <div className='container-start-column'>
    <table>
      <caption>
        <Topic title={'ใบสั่งสินค้า'} />
      </caption>
      <thead>
        <tr>
          <th scope='col'>ลำดับ</th>
          <th scope='col'>วันที่สั่ง</th>
          <th scope='col'>สถานะการชำระเงิน</th>
          <th scope='col'>ยอดรวม</th>
          <th scope='col'>เลขพัสดุ</th>
          <th scope='col'>รายละเอียด</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label='ลำดับ'>1.</td>
          <td data-label='วันที่สั่ง'>20-10-2021</td>
          <td data-label='สถานะการชำระเงิน'>
            <font className='pending'> pending </font>
          </td>
          <td data-label='ยอดรวม'>800฿</td>
          <td data-label='เลขพัสดุ'>-</td>
          <td data-label='รายละเอียด'>
            <a href='#' className='button-table blue'>
              <i className='fas fa-eye' onClick={handleDetailOrder}></i>
            </a>
          </td>
        </tr>

        <tr>
          <td data-label='ลำดับ'>2.</td>
          <td data-label='วันที่สั่ง'>20-10-2021</td>
          <td data-label='สถานะการชำระเงิน'>
            <font className='completed'> completed </font>
          </td>
          <td data-label='ยอดรวม'>600฿</td>
          <td data-label='เลขพัสดุ'>114-5678-93</td>
          <td data-label='รายละเอียด'>
            <a href='#' className='button-table blue'>
              <i className='fas fa-eye'></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    // </div>
  );
}

export default TableOrderForCustomer;
