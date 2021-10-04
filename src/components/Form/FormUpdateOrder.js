import React from 'react';
import './FormCustomerUpdateProfile.css';
import './FormUpdateOrder.css';
function FormUpdateOrder() {
  return (
    <div className='form-scope width-950'>
      <header>อัพเดทรายการสั่งซื้อ</header>
      <form action='#'>
        <div className='image-form-update-order'>
          <img
            src='https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
            alt=''
          />
        </div>

        <div className='dbl-field'>
          <div className='field'>
            <select name='Sub-district' id='zipcode' value='' required>
              <option value=''>เลือกธนาคาร</option>
              <option value='TMB'>TMB</option>
              <option value='SCB'>SCB</option>
            </select>
          </div>
          <div className='field'>
            <input type='text' placeholder='เลขบัญชีธนาคาร' />
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <select name='Sub-district' id='zipcode' value='' required>
              <option value=''>เลือกสถานะการชำระเงิน</option>
              <option value='PENDING'>PENDING</option>
              <option value='COMPLETED'>COMPLETED</option>
            </select>
          </div>
          <div className='field'>
            <input
              placeholder='วันที่สั่งซื้อ'
              type='text'
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
              id='date'
            />
            <i class='far fa-calendar-alt'></i>
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

export default FormUpdateOrder;
