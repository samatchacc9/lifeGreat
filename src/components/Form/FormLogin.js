import React from 'react';
import './Form.css';
import './FormOneline.css';
import './FormLogin.css';
import '../Container/ContainerCover.css';
import '../../App.css';
function FormLogin() {
  return (
    <div className='form-scope width-500 responsive'>
      <div className='form-header'>เข้าสู่ระบบ</div>
      <form action='#'>
        <div className='form-body'>
          <div className='one-field'>
            <div className='field'>
              <input type='text' placeholder='Enter your username' />
              <i className='fas fa-user'></i>
            </div>
            <div className='field'>
              <input type='text' placeholder='Enter your password' />
              <i className='fas fa-lock'></i>
            </div>
          </div>
        </div>
        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange'>
              reset
            </button>

            <button type='submit' className='green'>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
