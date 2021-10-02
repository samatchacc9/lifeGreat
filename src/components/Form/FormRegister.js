import React from 'react';
import './Form.css';
import '../Container/ContainerCover.css';

function FormRegister() {
  return (
    // <div className='container-cover'>
    //   <div className='container-content'>
    <div className='form-scope width-700'>
      <header>ลงทะเบียน</header>
      <form action='#'>
        <div className='title'>ข้อมูลส่วนตัว</div>
        <div className='dbl-field'>
          <div className='field'>
            <input type='text' placeholder='Enter your first name' />
            <i className='fas fa-user'></i>
          </div>
          <div className='field'>
            <input type='text' placeholder='Enter your last name' />
            <i className='fas fa-user'></i>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input type='text' placeholder='Enter your phone' />
            <i className='fas fa-phone-alt'></i>
          </div>
          <div className='field'>
            <input type='text' placeholder='Enter your email' />
            <i className='fas fa-envelope'></i>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              placeholder='Enter your date of birth'
              type='text'
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
              id='date'
            />
            <i className='fas fa-birthday-cake'></i>
          </div>
          <div className='field'>
            <select name='gender' id='gender' value='' required>
              <option value=''>select your gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
            </select>
          </div>
        </div>
        <div className='title'>ข้อมูลที่อยู่</div>
        <div className='dbl-field'>
          <div className='field'>
            <select name='province' id='province' value='' required>
              <option value=''>select your province</option>
              <option value='Bangkok'>Bangkok</option>
              <option value='Chang mai'>Chang mai</option>
            </select>
          </div>
          <div className='field'>
            <select name='district' id='district' value='' required>
              <option value=''>select your district</option>
              <option value='Dusit'>Dusit</option>
              <option value='Bangrak'>Bangrak</option>
            </select>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <select name='Sub-district' id='Sub-district' value='' required>
              <option value=''>select your sub district</option>
              <option value='Bangkoknoi'>Bangkoknoi</option>
              <option value='Saimai'>Saimaii</option>
            </select>
          </div>
          <div className='field'>
            <select name='Sub-district' id='zipcode' value='' required>
              <option value=''>select your zipcode</option>
              <option value='Bangkoknoi'>65330</option>
              <option value='Saimai'>4289</option>
            </select>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input type='text' placeholder='Enter house number' />
            <i className='fas fa-house-user'></i>
          </div>

          <div className='field'>
            <input type='text' placeholder='Enter your village' />
            <i className='fas fa-house-user'></i>
          </div>
        </div>
        <div className='title'>ข้อมูลเข้าสู่ระบบ</div>
        <div className='dbl-field'>
          <div className='field'>
            <input type='text' placeholder='Enter your username' />
            <i className='fas fa-user'></i>
          </div>
          <div className='field'>
            <input type='text' placeholder='Enter your password' />
            <i className='fas fa-lock'></i>
          </div>
        </div>

        <div className='field'>
          <input type='file' id='myfile' name='myfile' class='upload-box' />
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
    //   </div>
    // </div>
  );
}

export default FormRegister;
