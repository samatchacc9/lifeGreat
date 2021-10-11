import { createContext, useState, useEffect } from 'react';
// import jwt_decode from 'jwt-decode';
import { user as initailUser } from '../services/localStorage';
import axios from '../config/axios';

// ประกาศ Context
const AuthContext = createContext();

// สร้าง Function
function AuthContextProvider({ children }) {
  const [user, setUser] = useState(initailUser); //localStorage
  const role = !user?.role ? 'GUEST' : user.role === 'CUSTOMER' ? 'CUSTOMER' : 'ADMIN';

  //ส่ง prop
  return <AuthContext.Provider value={{ user, setUser, role }}>{children}</AuthContext.Provider>;
}

// export ออกไป
export { AuthContext, AuthContextProvider };
