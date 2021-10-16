import React from 'react';
import './FormCustomerUpdateProfile.css';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/authContext';
import imagesUser from '../../images/default-profile-user.png';
import { useHistory, useLocation } from 'react-router-dom';
import axios from '../../config/axios';
import Swal from 'sweetalert2';

function FormCustomerUpdateProfile() {
  // let { user } = useContext(AuthContext);
  const location = useLocation();
  const history = useHistory();

  const [id, setId] = useState(location.state.id);
  const [firstname, setFirstname] = useState(location.state.firstname);
  const [lastname, setLastname] = useState(location.state.lastname);
  const [dateofbirth, setDateofbirth] = useState(location.state.dateofbirth);
  const [phone, setPhone] = useState(location.state.phone);
  const [email, setEmail] = useState(location.state.email);
  const [gender, setGender] = useState(location.state.gender);
  const [province, setProvince] = useState(location.state.province);
  const [district, setDistrict] = useState(location.state.district);
  const [subdistrict, setSubdistrict] = useState(location.state.subdistrict);
  const [houseno, setHouseno] = useState(location.state.houseno);
  const [village, setVillage] = useState(location.state.village);
  const [zipcode, setZipcode] = useState(location.state.zipcode);
  const [username, setUsername] = useState(location.state.username);
  const [password, setPassword] = useState('');
  const [picurl, setPicurl] = useState(location.state.picurl);
  const [isUpdatePic, setIsUpdatePic] = useState(false);

  // onSubmit
  const handleSubmitUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('id', id);
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

    if (isUpdatePic) {
      formData.append('picurl', picurl);
    }
    axios.put(`/profile/ ${id}`, formData).then((res) => {
      // .put(`/category/${location.state.id}`, { categoryname })
      Swal.fire({
        title: 'Success',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      history.push({ pathname: '/CustomerProfile' });
    });
  };

  // function image
  const handleChangeFile = (e) => {
    setPicurl(e.target.files[0]);
    setIsUpdatePic(true);
  };

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
  };

  return (
    <div className='form-scope width-700'>
      <header>อัพเดทโปรไฟล์</header>
      <form onSubmit={handleSubmitUpdateProfile}>
        <div className='image-form'>
          {location.state.picurl ? (
            <img src={location.state.picurl} alt='profile' />
          ) : (
            <img src={imagesUser} alt='profile' />
          )}
        </div>
        <div className='title'>ข้อมูลส่วนตัว</div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter your first name'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <i className='fas fa-user'></i>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter your last name'
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
              placeholder='Enter your phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <i className='fas fa-phone-alt'></i>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <input
              type='text'
              placeholder='กรอกข้อมูลจังหวัด'
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลอำเภอ/ แขวง'
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='กรอกข้อมูลอำเภอ/ แขวง'
              value={subdistrict}
              onChange={(e) => setSubdistrict(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter house number'
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>
        </div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter house number'
              value={houseno}
              onChange={(e) => setHouseno(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>

          <div className='field'>
            <input
              type='text'
              placeholder='Enter your village'
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
            <i className='fas fa-house-user'></i>
          </div>
        </div>
        <div className='title'>ตั้งค่าข้อมูลเข้าสู่ระบบ</div>
        <div className='dbl-field'>
          <div className='field'>
            <input
              type='text'
              placeholder='Enter your username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className='fas fa-user'></i>
          </div>
          <div className='field'>
            <input
              type='password'
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
            <button type='reset' className='orange' onClick={handleClickReset}>
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

export default FormCustomerUpdateProfile;
