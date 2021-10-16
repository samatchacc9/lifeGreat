import React, { Children } from 'react';
import './Form.css';
import '../Container/ContainerCover.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import Swal from 'sweetalert2';
// import { userState } from 'reat';
import './Validate.css';

import validator from 'validator';

function FormRegister() {
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
  const [picurl, setPicurl] = useState(null);

  // console.log(firstname);
  // console.log(dateofbirth);
  // const [profileImage, setProfileImage] = useState(null); // state เก็บไฟล์
  // const [showImage, setShowImage] = useState('');

  const [validateFirstname, setValidateFirstname] = useState('');
  const [validateLastname, setValidateLastname] = useState('');
  const [validateDateofbirth, setValidateDateofbirth] = useState('');
  const [validatePhone, setValidatePhone] = useState('');
  const [validateEmail, setValidateEmail] = useState('');
  const [validateGender, setValidateGender] = useState('');
  const [validateProvince, setValidateProvince] = useState('');
  const [validateDistrict, setValidateDistrict] = useState('');
  const [validateSubdistrict, setValidateSubdistrict] = useState('');
  const [validateHouseno, setValidateHouseno] = useState('');
  const [validateVillage, setValidateVillage] = useState('');
  const [validateZipcode, setValidateZipcode] = useState('');
  const [validateUsername, setValidateUsername] = useState('');
  const [validatePassword, setValidatePassword] = useState('');
  const [validatePicurl, setValidatePicurl] = useState(null);

  // function

  const history = useHistory();

  const handleClickReset = (e) => {
    setFirstname('');
    setLastname('');
    setDateofbirth('');
    setPhone('');
    setEmail('');
    setGender('');
    setProvince('');
    setDistrict('');
    setSubdistrict('');
    setHouseno('');
    setVillage('');
    setZipcode('');
    setUsername('');
    setPassword('');
    setValidatePicurl(null);
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      if (firstname.trim() === '') {
        setValidateFirstname('FirstName is required');
      } else {
        setValidateFirstname('');
      }
      if (lastname.trim() === '') {
        setValidateLastname('LastName is required');
      } else {
        setValidateLastname('');
      }
      if (!dateofbirth) {
        setValidateDateofbirth('date is required');
      } else {
        setValidateDateofbirth('');
      }
      if (phone.trim() === '') {
        setValidatePhone('phone number is required');
      } else {
        setValidatePhone('');
      }
      if (!validator.isEmail(email)) {
        setValidateEmail('email is required');
      } else {
        setValidateEmail('');
      }
      if (gender.trim() === '') {
        setValidateGender('gender is required');
      } else {
        setValidateGender('');
      }
      if (province.trim() === '') {
        setValidateProvince('province is required');
      } else {
        setValidateProvince('');
      }
      if (district.trim() === '') {
        setValidateDistrict('district is required');
      } else {
        setValidateDistrict('');
      }
      if (subdistrict.trim() === '') {
        setValidateSubdistrict('subdistrict is required');
      } else {
        setValidateSubdistrict('');
      }
      if (houseno.trim() === '') {
        setValidateHouseno('house number is required');
      } else {
        setValidateHouseno('');
      }
      if (village.trim() === '') {
        setValidateVillage('village is required');
      } else {
        setValidateVillage('');
      }
      if (zipcode.trim() === '') {
        setValidateZipcode('zipcode is required');
      } else {
        setValidateZipcode('');
      }
      if (username.trim() === '') {
        setValidateUsername('username is required');
      } else {
        setValidateUsername('');
      }
      if (password.trim() === '') {
        setValidatePassword('password is required');
      } else {
        setValidatePassword('');
      }
    } catch (err) {
      // console.log(object)
    }

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

    if (
      firstname &&
      lastname &&
      dateofbirth &&
      phone &&
      email &&
      gender &&
      province &&
      district &&
      subdistrict &&
      houseno &&
      village &&
      zipcode &&
      username &&
      password
    ) {
      axios.post('/register', formData).then((res) => {
        history.push({ pathname: '/login' });
      });
    }
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
            <p className='validate'>{validateFirstname}</p>
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลนามสกุล'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <i className='fas fa-user'></i>
            <p className='validate'>{validateLastname}</p>
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
            <p className='validate'>{validatePhone}</p>
          </div>

          <div className='field'>
            <input type='text' placeholder='กรอกอีเมล์' value={email} onChange={(e) => setEmail(e.target.value)} />
            <i className='fas fa-envelope'></i>
            <p className='validate'>{validateEmail}</p>
          </div>
        </div>

        <div className='dbl-field'>
          <div className='field'>
            <input
              placeholder='กรอกข้อมูลวันเกิด'
              type='text'
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
              id='date'
              value={dateofbirth}
              onChange={(e) => setDateofbirth(e.target.value)}
            />
            <i className='fas fa-birthday-cake'></i>
            <p className='validate'>{validateDateofbirth}</p>
          </div>

          <div className='field'>
            <select name='gender' id='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value='' id='gender-pre'>
                กรอกข้อมูลเพศ
              </option>
              <option value='MALE'>ชาย</option>
              <option value='FEMALE'>หญิง</option>
            </select>
            <p className='validate'>{validateGender}</p>
          </div>
        </div>
        <div className='title'>ข้อมูลที่อยู่</div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกจังหวัด'
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
            <p className='validate'>{validateProvince}</p>
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='กรอกอำเภอ/เขต'
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
            <p className='validate'>{validateDistrict}</p>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกตำบล/แขวง'
              value={subdistrict}
              onChange={(e) => setSubdistrict(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
            <p className='validate'>{validateSubdistrict}</p>
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='กรอกรหัสไปรษณีย์'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
            <p className='validate'>{validateZipcode}</p>
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
            <p className='validate'>{validateHouseno}</p>
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลหมู่บ้าน'
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
            <p className='validate'>{validateVillage}</p>
          </div>
        </div>
        <div className='title'>ตั้งค่าข้อมูลเข้าสู่ระบบ</div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอก username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className='fas fa-user'></i>
            <p className='validate'>{validateUsername}</p>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className='fas fa-lock'></i>
            <p className='validate'>{validatePassword}</p>
          </div>
        </div>

        <div className='field'>
          <input type='file' id='myfile' name='myfile' className='upload-box' onChange={handleChangeFile} />
        </div>

        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange' onClick={handleClickReset}>
              reset
            </button>

            <button className='green'>save</button>
          </div>
        </div>
      </form>
    </div>
    //   </div>
    // </div>
  );
}

export default FormRegister;
