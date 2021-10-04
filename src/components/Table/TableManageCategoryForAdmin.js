import React from 'react';
import './Table.css';
import '../../components/Container/ContainerStartColumn.css';

function TableManageCategoryForAdmin() {
  return (
    <>
      <div className='btnAdd '>
        <button>
          <i class='fas fa-plus'></i> เพิ่มประเภท
        </button>
      </div>

      {/* <div className='container-start-column'> */}
      <table>
        {/* <caption>Order Detail</caption> */}
        <thead>
          <tr>
            <th scope='col'>ลำดับ</th>
            <th scope='col'>ชื่อประเภท</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Cancle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label='ลำดับ'>1.</td>
            <td data-label='ชื่อประเภท'>Vitamin</td>
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
            <td data-label='ชื่อประเภท'>Vitamin</td>
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
        </tbody>
      </table>
    </>
  );
}

export default TableManageCategoryForAdmin;
