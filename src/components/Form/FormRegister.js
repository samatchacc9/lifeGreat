import React from 'react';
import './Form.css';
import '../Container/ContainerCover.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';

// import { userState } from 'reat';

function FormRegister(props) {
  //set state เพื่อผูกกับ input
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dateofbirth, setDateofbirth] = useState(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [subdistrict, setSubdistrict] = useState('');
  const [houseno, setHouseno] = useState('');
  const [village, setVillage] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [picurl, setPicurl] = useState('');

  // console.log(firstname);
  // console.log(dateofbirth);
  // const [profileImage, setProfileImage] = useState(null); // state เก็บไฟล์
  // const [showImage, setShowImage] = useState('');

  // function

  const history = useHistory();

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('dateofbirth', dateofbirth);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('gender', gender);
    formData.append('province', province);
    formData.append('district', district);
    formData.append('subdistrict', subdistrict);
    formData.append('houseno', houseno);
    formData.append('village', village);
    formData.append('zipcode', zipcode);
    formData.append('username', username);
    formData.append('password', password);
    formData.append('picurl', picurl);

    axios.post('/register', formData).then((res) => {
      history.push({ pathname: '/login' });
    });
  };

  // image
  const handleChangeFile = (e) => {
    // console.log(e.target.files);
    setPicurl(e.target.files[0]);
  };

  return (
    // <div className='container-cover'>
    //   <div className='container-content'>
    <div className='form-scope width-700'>
      <header>ลงทะเบียน</header>

      <form onSubmit={handleSubmitRegister}>
        <div className='title'>ข้อมูลส่วนตัว</div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลชื่อ'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <i className='fas fa-user'></i>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลนามสกุล'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <i className='fas fa-user'></i>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลเบอร์โทรศัพท์'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <i className='fas fa-phone-alt'></i>
          </div>
          <div className='field'>
            <input type='text' placeholder='กรอกอีเมล์' value={email} onChange={(e) => setEmail(e.target.value)} />
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
              value={dateofbirth}
              onChange={(e) => setDateofbirth(e.target.value)}
            />
            <i className='fas fa-birthday-cake'></i>
          </div>
          <div className='field'>
            <select name='gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value=''>select your gender</option>
              <option value='MALE'>Male</option>
              <option value='FEMALE'>Female</option>
            </select>
          </div>
        </div>
        <div className='title'>ข้อมูลที่อยู่</div>
        <div className='dbl-field'>
          <div className='field'>
            <select name='province' id='province' value={province} onChange={(e) => setProvince(e.target.value)}>
              <option value=''>select your province</option>
              <option value='Bangkok'>Bangkok</option>
              <option value='Chang mai'>Chang mai</option>
            </select>
          </div>
          <div className='field'>
            <select name='district' id='district' value={district} onChange={(e) => setDistrict(e.target.value)}>
              <option value=''>select your district</option>
              <option value='Dusit'>Dusit</option>
              <option value='Bangrak'>Bangrak</option>
            </select>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <select
              name='subdistrict'
              id='subdistrict'
              value={subdistrict}
              onChange={(e) => setSubdistrict(e.target.value)}>
              <option value=''>select your sub district</option>
              <option value='Bangkoknoi'>Bangkoknoi</option>
              <option value='Saimai'>Saimaii</option>
            </select>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกรหัสไปรษณีย์'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกบ้านเลขที่'
              value={houseno}
              onChange={(e) => setHouseno(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลหมู่บ้าน'
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>
        </div>
        <div className='title'>ข้อมูลเข้าสู่ระบบ</div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอก username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className='fas fa-user'></i>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='fas fa-lock'></i>
          </div>
        </div>

        <div className='field'>
          <input type='file' id='myfile' name='myfile' className='upload-box' onChange={handleChangeFile} />
        </div>

        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange'>
              reset
            </button>

            <button>save</button>
          </div>
        </div>
      </form>
    </div>
    //   </div>
    // </div>
  );
}

export default FormRegister;
