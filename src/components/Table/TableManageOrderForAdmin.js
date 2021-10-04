import React from 'react';
import Topic from '../Topic/Topic';
import './Table.css';
import '../Container/ContainerStartColumn.css';

function TableManageOrderForAdmin() {
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
          <th scope='col'>เลขพัสดุ</th>
          <th scope='col'>แก้ไข</th>
          <th scope='col'>ยกเลิก</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label='ลำดับ'>1.</td>
          <td data-label='ชื่อ-สกุล'>John Alex</td>
          <td data-label='วันที่สั่ง'>20-10-2021</td>
          <td data-label='สถานะ'>
            <font className='pending'> pending </font>
          </td>
          <td data-label='ยอดรวม'>800฿</td>
          <td data-label='เลขพัสดุ'>-</td>
          <td data-label='Edit'>
            <a href='#' className='button-table blue'>
              <i class='fas fa-wrench'></i>
            </a>
          </td>
          <td data-label='Cancle'>
            <a href='#' className='button-table red'>
              <i className='fas fa-window-close'></i>
            </a>
          </td>
        </tr>

        <tr>
          <td data-label='ลำดับ'>2.</td>
          <td data-label='ชื่อ-นามสกุล'>Marry Mathar</td>
          <td data-label='วันที่สั่ง'>20-10-2021</td>
          <td data-label='สถานะชำระเงิน'>
            <font className='completed'>completed</font>
          </td>
          <td data-label='ยอดรวม'>650฿</td>
          <td data-label='เลขพัสดุ'>114-325-89</td>
          <td data-label='Edit'>
            <a href='#' className='button-table blue'>
              <i class='fas fa-wrench'></i>
            </a>
          </td>
          <td data-label='Cancle'>
            <a href='#' className='button-table red disabled'>
              <i className='fas fa-window-close'></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    // </div>
  );
}

export default TableManageOrderForAdmin;
