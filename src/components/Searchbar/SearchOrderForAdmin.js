import React from 'react';
import './SearchFourField.css';

function SearchOrderForAdmin() {
  return (
    <div className='frame-search-data '>
      <form>
        <div className='field-col4'>
          <div className='field'>
            <input type='text' placeholder='ชื่อ-สกุล' />
            <i className='fas fa-user'></i>
          </div>

          <div className='field'>
            <input
              placeholder='วันที่สั่ง'
              className='textbox-n'
              type='text'
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
              id='date'
            />
            <i class='fas fa-calendar-alt'></i>
          </div>

          <div className='field'>
            <input type='text' placeholder='เลขพัสดุ' />
            <i class='fas fa-truck'></i>
          </div>

          <div className='field'>
            <select name='gender' id='gender' required>
              <option value='' disabled selected>
                สถานะชำระเงิน
              </option>
              <option value='Female'>pedding</option>
              <option value='Female'>completed</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchOrderForAdmin;
