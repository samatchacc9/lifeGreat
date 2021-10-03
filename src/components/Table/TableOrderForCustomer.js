import React from 'react';
import Topic from '../Topic/Topic';
import './Table.css';

function TableOrderForCustomer() {
  return (
    <>
      <table>
        <caption>
          <Topic title={'ใบสั่งสินค้า'} />
        </caption>
        <thead>
          <tr>
            <th scope='col'>ลำดับ</th>
            <th scope='col'>วันที่สั่ง</th>
            <th scope='col'>สถานะการชำระเงิน</th>
            <th scope='col'>เลขพัสดุ</th>
            <th scope='col'>ยอดรวม</th>
            <th scope='col'>รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label='No.'>1.</td>
            <td data-label='Order date'>20-10-2021</td>
            <td data-label='Payment status'>
              <font className='pending'> pending </font>
            </td>
            <td data-label='Summary'>-</td>
            <td data-label='Summary'>800฿</td>
            <td data-label='Detail'>
              <a href='#' className='button-create blue'>
                <i className='fas fa-eye'></i>
              </a>
            </td>
          </tr>

          <tr>
            <td data-label='No.'>2.</td>
            <td data-label='Order date'>20-10-2021</td>
            <td data-label='Payment status'>
              <font className='completed'> completed </font>
            </td>
            <td data-label='Summary'>114-5678-93</td>
            <td data-label='Summary'>600฿</td>
            <td data-label='Detail'>
              <a href='#' className='button-create blue'>
                <i className='fas fa-eye'></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableOrderForCustomer;
