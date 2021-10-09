import jwtDecode from 'jwt-decode';
const TOKEN_NAME = 'token';
const getToken = () => localStorage.getItem(TOKEN_NAME); // รับ token ตัวอักษรเยอะๆอ่านไม่ออกที่เข้ารหัส
const setToken = (token) => localStorage.setItem(TOKEN_NAME, token); //เอาไปใช้ set
const removeToken = () => localStorage.removeItem(TOKEN_NAME); // เอาไปใช้ลบ
const user = getToken() ? jwtDecode(getToken()) : null;

export { getToken, setToken, removeToken, user };
