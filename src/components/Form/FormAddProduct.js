import React from 'react';
import './Form.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';

function FormAddProduct(props) {
  const [productbrand, setProductbrand] = useState('');
  const [productname, setProductname] = useState('');
  const [productdetail, setProductdetail] = useState('');
  const [productprice, setProductprice] = useState('');
  const [productamount, setProductamount] = useState('');
  const [picurl, setPicurl] = useState('');

  // image
  const handleChangeFile = (e) => {
    // console.log(e.target.files);
    setPicurl(e.target.files[0]);
  };

  return (
    <div className='form-scope width-700'>
      <header style={{ marginBottom: '15px' }}>เพิ่มข้อมูลสินค้า</header>

      <form action='#'>
        <div className='dbl-field'>
          <div className='field'>
            <select name='category' id='district' value='' required>
              <option value=''>เลือกประเภทสินค้า</option>
              <option value='Dusit'>Dusit</option>
              <option value='Bangrak'>Bangrak</option>
            </select>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกยี่ห้อสินค้า'
              value={productbrand}
              onChange={(e) => setProductbrand(e.target.value)}
            />
          </div>
        </div>

        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกราคา'
              value={productprice}
              onChange={(e) => setProductprice(e.target.value)}
            />
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='กรอกจำนวน'
              value={productamount}
              onChange={(e) => setProductamount(e.target.value)}
            />
          </div>
        </div>

        <div className='field'>
          {/* <input type='text' placeholder='รายละเอียด' /> */}
          <textarea
            id='w3review'
            name='w3review'
            rows='4'
            cols='60'
            placeholder='กรอกรายละเอียดสินค้า'
            value={productdetail}
            onChange={(e) => setProductdetail(e.target.value)}
          />
        </div>
        <div className='field'>
          <input type='file' id='myfile' name='myfile' className='upload-box' onChange={handleChangeFile} />
        </div>

        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange'>
              reset
            </button>

            <button type='submit' className='green'>
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAddProduct;
