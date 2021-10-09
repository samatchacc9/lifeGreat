import axios from 'axios'; // libary method ห่อหุ้ม
import { getToken, removeToken } from '../services/localStorage'; // รับ token และ remove token
import { API_URL } from './env'; // เชื่อม port backend
//////////////////////////////////////////

// assign port ไปผูกกับ axios
axios.defaults.baseURL = API_URL;

// axios ส่ง bearer ส่งที่ head ตัว req
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = 'Bearer ' + getToken();
    // config.headers.Test = 'Test interceptor';
    // config.params = { testfff: 'adbcefgh' };
    return config;
  },
  (err) => Promise.reject(err),
);

// // axios ตัวรับ res
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      removeToken();
      window.location.reload();
      return; //ถ้าเข้า reload จะจบเลย ไม่มา return
    }
    return Promise.reject(err);
  },
);

export default axios;
