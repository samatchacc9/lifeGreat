import React from 'react';
import './Table.css';
import '../../components/Container/ContainerStartColumn.css';
import { useHistory } from 'react-router-dom';

function TableManageProductForAdmin() {
  const history = useHistory();

  const handleAddProduct = () => {
    history.push('/AdminAddProduct');
  };

  const handleUpateProduct = () => {
    history.push('/AdminUpdateProduct');
  };

  return (
    <>
      {/* <div style={{ marginBottom: '10px' }}>
        <a href='#' className='button-create ' style={{ background: 'rgba(61, 240, 61, 0.884)' }}>
          <i class='fas fa-plus-square'></i>
        </a>
      </div> */}
      {/* <div className='container-start-column'> */}

      <div className='btnAdd '>
        <button onClick={handleAddProduct}>
          <i class='fas fa-plus'></i> เพิ่มสินค้า
        </button>
      </div>

      {/* <div className='container-start-column'> */}
      <table>
        {/* <caption>Order Detail</caption> */}
        <thead>
          <tr>
            <th scope='col'>No.</th>
            <th scope='col'>Category</th>
            <th scope='col'>Product Brand</th>
            <th scope='col'>Product image</th>
            <th scope='col'>Product Detail</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Cancle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label='No.'>1.</td>
            <td data-label='Category'>Vitamin</td>
            <td data-label='Product Brand'>Blackmore</td>
            <td data-label='Product image'>
              <img
                src='https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=614&q=80'
                alt=''
              />
            </td>
            <td data-label='Product Detail'>Vitamin c 500 mlg</td>
            <td data-label='Edit'>
              <a href='#' className='button-table blue' onClick={handleUpateProduct}>
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
            <td data-label='No.'>2.</td>
            <td data-label='Category'>Vitamin</td>
            <td data-label='Product Brand'>Blackmore</td>
            <td data-label='Product image'>
              <img
                src='https://images.unsplash.com/photo-1584362917137-56406a73241c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=614&q=80'
                alt=''
              />
            </td>
            <td data-label='Product Detail'>Vitamin c 500 mlg</td>
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
      {/* </div> */}
    </>
  );
}

export default TableManageProductForAdmin;
