import React from 'react';
import './Form.css';
import './FormOneline.css';
import './FormLogin.css';
import '../Container/ContainerCover.css';
import '../../App.css';
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../config/axios';
import jwtDecode from 'jwt-decode';
import { AuthContext } from '../../contexts/authContext';
import { setToken } from '../../services/localStorage';

function FormLogin(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(AuthContext);

  const history = useHistory();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/login', { username, password });
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      // console.log(jwtDecode(res.data.token).role);
      if (jwtDecode(res.data.token).role === 'CUSTOMER') {
        history.push('/CustomerProfile');
      } else if (jwtDecode(res.data.token).role === 'ADMIN') {
        history.push('/ManageOrder');
      }
      //check role select history push

      // history.push('/');
    } catch (err) {
      // if (err.response && err.response.status === 400) {
      //   props.setError('Invalid username or password');
      // }
      console.dir(err);
    }
  };

  return (
    <div className='form-scope width-500 responsive'>
      <div className='form-header'>เข้าสู่ระบบ</div>
      <form onSubmit={handleSubmitLogin}>
        <div className='form-body'>
          <div className='one-field'>
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
                cvalue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
