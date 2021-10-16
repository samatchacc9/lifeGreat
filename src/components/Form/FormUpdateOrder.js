import React from 'react';
import './FormCustomerUpdateProfile.css';
import './FormUpdateOrder.css';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import { useContext } from 'react';
import { OrderContext } from '../../contexts/orderContext';

function FormUpdateOrder() {
  const location = useLocation();
  const history = useHistory();

  const { setToggleFetch } = useContext(OrderContext);

  const [bankname, setBankname] = useState(location.state.bankname);
  const [bankno, setBankno] = useState(location.state.bankno);
  const [paymentstatus, setPaymentstatus] = useState(location.state.paymentstatus);
  const [orderdate, setOrderdate] = useState(location.state.orderdate);
  const [picurl, setpicurl] = useState(location.state.picurl);

  const handleUpdateOrder = (e) => {
    e.preventDefault();

    axios
      .put(`/order/${location.state.id}`, { bankname, bankno, paymentstatus, orderdate })
      .then(() => {
        setToggleFetch((cur) => !cur);
        history.push({
          pathname: '/ManageOrder',
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
    <div className='form-scope width-950'>
      <header>อัพเดทรายการสั่งซื้อ</header>

      <form onSubmit={handleUpdateOrder}>
        <div className='image-form-update-order'>
          <img src={picurl} alt='' />
        </div>

        <div className='dbl-field'>
          <div className='field'>
            <select name='Sub-district' id='zipcode' value={bankname} onChange={(e) => setBankname(e.target.value)}>
              <option value=''>เลือกธนาคาร</option>
              <option value='ทหารไทยTMB'>TMB</option>
              <option value='ไทยพาณิชย์SCB'>SCB</option>
            </select>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='เลขบัญชีธนาคาร'
              value={bankno}
              onChange={(e) => setBankno(e.target.value)}
            />
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <select
              name='Sub-district'
              id='zipcode'
              value={paymentstatus}
              onChange={(e) => setPaymentstatus(e.target.value)}>
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
              value={orderdate}
              onChange={(e) => setOrderdate(e.target.value)}
            />
            <i class='far fa-calendar-alt'></i>
          </div>
        </div>

        <div className='form-footer'>
          <div className='button-area'>
            {/* <button type='reset' className='orange'>
              reset
            </button> */}

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
