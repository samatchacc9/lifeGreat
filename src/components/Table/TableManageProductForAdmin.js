import React from 'react';
import './Table.css';
import '../../components/Container/ContainerStartColumn.css';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../config/axios';
import imagesProduct from '../../images/product-default.png';
import Swal from 'sweetalert2';

function TableManageProductForAdmin() {
  let count = 1;

  const history = useHistory();

  const handleAddProduct = () => {
    history.push('/AdminAddProduct');
  };

  // const handleUpateProduct = () => {
  //   history.push('/AdminUpdateProduct');
  // };

  //  State เริ่มต้น
  const [products, setProducts] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handleClickDelete = async (e, id) => {
    try {
      Swal.fire({
        title: 'ต้องการลบหรือไม่',
        // text: "You won't be logout",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`/product/${id}`);
          setToggle((c) => !c);
        }
      });
      // console.log(id);
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get('/product');
        const resProducts = res.data.products;
        console.log(resProducts);
        setProducts(resProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [toggle]);

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
            <th scope='col'>ลำดับ</th>
            <th scope='col'>ประเภท</th>
            <th scope='col'>แบรนด์</th>
            <th scope='col'>ภาพ</th>
            <th scope='col'>ราคา</th>
            <th scope='col'>จำนวนสินค้า</th>
            <th scope='col'>รายละเอียด</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Cancle</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr>
                <td data-label='ลำดับ'>{count++}</td>
                <td data-label='ประเภท'>{item.Category.categoryname}</td>
                <td data-label='แบรนด์'>{item.productbrand}</td>
                <td data-label='ภาพ'>
                  {item.picurl ? <img src={item.picurl} alt='product' /> : <img src={imagesProduct} alt='product' />}
                </td>
                <td data-label='ราคา'>{item.productprice}</td>
                <td data-label='ราคา'>{item.productamount}</td>
                <td data-label='รายละเอียด'>{item.productdetail}</td>
                <td data-label='Edit'>
                  <Link to={{ pathname: `/AdminUpdateProduct/${item.id}`, state: item }} className='button-table blue'>
                    <i class='fas fa-wrench'></i>
                  </Link>
                </td>
                <td data-label='Cancle'>
                  <button className='button-table red' onClick={(e) => handleClickDelete(e, item.id)}>
                    <i className='fas fa-window-close'></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
    </>
  );
}

export default TableManageProductForAdmin;
