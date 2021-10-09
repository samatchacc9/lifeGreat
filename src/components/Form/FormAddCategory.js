import React from 'react';
import './Form.css';
import './FormOneline.css';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';

function FormAddCategory() {
  const [categoryname, setCategoryname] = useState('');

  const history = useHistory();

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    axios
      .post('/category', { categoryname })
      .then(() => {
        history.push({
          pathname: '/ManageCategory',
          state: { successMessage: 'Your account has been created. Categoryto continue.' },
        });
      })
      .catch((err) => {
        // if (err.response && err.response.status === 400) {
        //   props.setError(err.response.data.message);
        // }
      });
  };
  return (
    <div className='form-scope width-500 responsive'>
      <div className='form-header'>เพิ่มประเภทสินค้า</div>
      <form onSubmit={handleSubmitCategory}>
        <div className='form-body'>
          <div className='one-field'>
            <div className='field'>
              <input
                type='text'
                placeholder='กรอกประเภทสินค้า'
                value={categoryname}
                onChange={(e) => setCategoryname(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange'>
              Reset
            </button>

            <button type='submit' className='green'>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormAddCategory;
