import React from 'react';
import './Table.css';
import '../../components/Container/ContainerStartColumn.css';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from '../../config/axios';

function TableManageCategoryForAdmin() {
  let count = 1;
  const history = useHistory();

  const handleClickAddCategory = () => {
    history.push('/AdminAddCategory');
  };

  const [categorys, setCategorys] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const category = async () => {
      try {
        const res = await axios.get('/category');
        const categories = res.data.categorys;
        setCategorys(categories);
      } catch (err) {
        console.log(err);
      }
    };
    category();
  }, [toggle]);

  console.log(categorys);

  // function delete
  const handleClickDelete = async (e, id) => {
    try {
      console.log(id);
      await axios.delete(`/category/${id}`);
      setToggle((c) => !c);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='btnAdd '>
        <button onClick={handleClickAddCategory}>
          <i className='fas fa-plus'></i> เพิ่มประเภท
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
          {categorys.map((item) => {
            return (
              <tr key={item.id}>
                <td data-label='ลำดับ'>{count++}.</td>
                <td data-label='ชื่อประเภท'>{item.categoryname}</td>
                <td data-label='Edit'>
                  <Link to={{ pathname: `/AdminUpdateCategory/${item.id}`, state: item }} className='button-table blue'>
                    <i className='fas fa-wrench'></i>
                  </Link>
                </td>
                <td data-label='Cancle'>
                  {/* <a href='#' className='button-table red' onClick={handleClickDelete}> */}
                  <button className='button-table red' onClick={(e) => handleClickDelete(e, item.id)}>
                    <i className='fas fa-window-close'></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TableManageCategoryForAdmin;
