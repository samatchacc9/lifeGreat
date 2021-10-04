import React from 'react';
import './Form.css';

function FormUpdateProduct() {
  return (
    <div className='form-scope width-700'>
      <header style={{ marginBottom: '15px' }}>แก้ข้อมูลสินค้า</header>
      <form action='#'>
        <div className='dbl-field'>
          <div className='field'>
            <select name='district' id='district' value='' required>
              <option value=''>เลือกประเภทสินค้า</option>
              <option value='Dusit'>Dusit</option>
              <option value='Bangrak'>Bangrak</option>
            </select>
          </div>
          <div className='field'>
            <input type='text' placeholder='กรอกยี่ห้อสินค้า' />
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input type='file' id='myfile' name='myfile' class='upload-box' />
          </div>

          <div className='field'>
            {/* <input type='text' placeholder='รายละเอียด' /> */}
            <textarea id='w3review' name='w3review' rows='4' cols='60' placeholder='กรอกรายละเอียดสินค้า'></textarea>
          </div>
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

export default FormUpdateProduct;
