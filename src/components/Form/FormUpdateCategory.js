import React, { useState } from 'react';
import './Form.css';
import './FormOneline.css';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';

function FormUpdateCategory() {
  const location = useLocation();
  const history = useHistory();

  const [categoryname, setCategoryname] = useState(location.state.categoryname);

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    axios
      .put(`/category/${location.state.id}`, { categoryname })
      .then(() => {
        history.push({
          pathname: '/ManageCategory',
          state: { successMessage: 'Your account has been created. Category to continue.' },
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
      <div className='form-header'>แก้ไขประเภทสินค้า</div>
      <form onSubmit={handleUpdateCategory}>
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
            {/* <button type='reset' className='orange'>
              Reset
            </button> */}

            <button type='submit' className='green'>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormUpdateCategory;
