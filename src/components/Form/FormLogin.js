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
import Swal from 'sweetalert2';
import { OrderContext } from '../../contexts/orderContext';
import './Validate.css';
// import withReactContent from 'sweetalert2-react-content';

function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState({});

  const { setToggleFetch } = useContext(OrderContext);

  // const [toggleFetch, setToggleFetch] = useState(false);

  const { setUser } = useContext(AuthContext);

  const history = useHistory();

  const handleClickReset = (e) => {
    setUsername('');
    setPassword('');
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    let isError = false;

    try {
      if (username.trim() === '') {
        setErr((curr) => ({ ...curr, username: 'Username is required' }));
        isError = true;
      }
      if (password.trim() === '') {
        setErr((curr) => ({ ...curr, password: 'Password is required' }));
        isError = true;
      }

      if (!isError) {
        const res = await axios.post('/login', { username, password });
        setToken(res.data.token);
        setUser(jwtDecode(res.data.token));

        if (jwtDecode(res.data.token).role === 'CUSTOMER') {
          Swal.fire({
            title: 'ยินดีต้อนรับ',
            // text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          history.push('/CustomerProfile');
        } else if (jwtDecode(res.data.token).role === 'ADMIN') {
          Swal.fire({
            title: 'ยินดีต้อนรับเข้าสู่ระบบ',
            icon: 'success',
            confirmButtonText: 'OK',
          });
          history.push('/ManageOrder');
        }
        // console.log('Tish');
        setToggleFetch((cur) => !cur);
      }
    } catch (err) {
      console.dir(err);

      if (err.response.data.message) {
        setErr((curr) => ({ ...curr, username: err.response.data.message }));
      }
      if (err.response.data.message) {
        setErr((curr) => ({ ...curr, password: err.response.data.message }));
      }
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
              {err.username && <p className='validate'> {err.username} </p>}
              <i className='fas fa-user'></i>
            </div>
            <div className='field'>
              <input
                type='password'
                placeholder='Enter your password'
                cvalue={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {err.password && <p className='validate'> {err.password} </p>}
              <i className='fas fa-lock'></i>
            </div>
          </div>
        </div>
        <div className='form-footer'>
          <div className='button-area'>
            <button type='reset' className='orange' onClick={handleClickReset}>
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
