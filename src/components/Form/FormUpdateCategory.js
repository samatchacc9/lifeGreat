import React from 'react';
import './Form.css';
import './FormOneline.css';

function FormUpdateCategory() {
  return (
    <div className='form-scope width-500 responsive'>
      <div className='form-header'>แก้ไขประเภทสินค้า</div>
      <form action='#'>
        <div className='form-body'>
          <div className='one-field'>
            <div className='field'>
              <input type='text' placeholder='กรอกประเภทสินค้า' />
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

export default FormUpdateCategory;
