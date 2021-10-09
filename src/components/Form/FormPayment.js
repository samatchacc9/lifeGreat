import React from 'react';
import { useHistory } from 'react-router-dom';
import './FormPayment.css';

function FormPayment() {
  const history = useHistory();

  const handleClickPayment = () => {
    history.push('/CustomerOrder');
  };
  return (
    <div className='form-scope width-700'>
      <header>ชำระเงิน</header>
      <form action='#'>
        <div class='summary'>
          <div class='summary-text'>
            <h3>ยอดรวมทั้งหมด</h3>
          </div>
          <div class='summary-price'>
            <h3>฿1020</h3>
          </div>
        </div>
        <div class='bank'>
          <div class='bank-title'>
            <h3>ชำระเงินผ่านบัญชีธนาคาร</h3>
          </div>
          <div class='bank-detail'>
            <h4>ธนาคารไทยพาณิชย์ SCB</h4>
            <h4>ชื่อบัญชี บริษัท ไลฟ์เกรท จำกัด</h4>
            <h4>เลขบัญชี: 468-0000-000</h4>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <select name='Bank' id='Bank' value='' required>
              <option value=''>เลือกธนาคารที่โอน</option>
              <option value='Bangkoknoi'>SCB</option>
              <option value='Saimai'>TMB</option>
            </select>
          </div>
          <div className='field'>
            <input type='text' placeholder='เลขบัญชี' />
            <i className='fas fa-user'></i>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              placeholder='เลือกวันที่โอนเงิน'
              type='text'
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
              id='date'
            />
            <i class='far fa-calendar-alt'></i>
          </div>
          <div className='field'>
            <input type='file' id='myfile' name='myfile' class='upload-box' />
          </div>
        </div>
        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange'>
              reset
            </button>

            <button type='submit' className='green' onClick={handleClickPayment}>
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormPayment;
