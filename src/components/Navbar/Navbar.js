import React from 'react';
import { GUEST, ADMIN, CUSTOMER } from './MenuList';
import { useState, useContext } from 'react';
import './Navbar.css';
import Searchbar from '../Searchbar/Searchbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { useHistory } from 'react-router-dom';
import { removeToken } from '../../services/localStorage';

function Navbar() {
  // set state ไปรับค่าเพื่อ rerendeใหม่
  const { user, setUser } = useContext(AuthContext);
  const { openSearbar, setOpenSearchbar } = false;
  //state เปิดปิด hamburger
  const [clicked, setClicked] = useState(false);

  const history = useHistory();

  const historyCart = useHistory();

  // const handleClickCard = () => {
  //   history.push('/CustomerProductDetail');
  // };

  const handleClickCart = () => {
    historyCart.push('/CustomerCart');
  };

  // const handleClickCard = () => {
  //   history.push('/CustomerProductDetail');
  // };

  const handleClickLogout = (e, title) => {
    // console.log(`e`, e);
    // console.log(`title`, title);
    if (title === 'Logout') {
      e.preventDefault(); // a tag
      removeToken();
      setUser(null); // update sate
      history.push('/');
    }
  };

  // Loop menu
  const { role } = useContext(AuthContext);

  const menuList =
    role === 'GUEST'
      ? GUEST.map(({ to, title }, index) => {
          return (
            <li key={index}>
              <NavLink exact to={to} activeClassName='active'>
                {title}
              </NavLink>
            </li>
          );
        })
      : role === 'ADMIN'
      ? ADMIN.map(({ to, title }, index) => {
          return (
            <li key={index}>
              <NavLink exact to={to} activeClassName='active' onClick={(e) => handleClickLogout(e, title)}>
                {title}
              </NavLink>
            </li>
          );
        })
      : CUSTOMER.map(({ to, title }, index) => {
          return (
            <li key={index}>
              <NavLink exact to={to} activeClassName='active' onClick={(e) => handleClickLogout(e, title)}>
                {title}
              </NavLink>
            </li>
          );
        });

  // function click
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link
        to={`${role === 'GUEST' ? '/' : role === 'CUSTOMER' ? '/CustomerProduct' : '/ManageOrder'}`}
        className='logo'>
        Life<font>Great</font>
      </Link>

      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      {/* cart icon */}
      {role === 'CUSTOMER' && (
        <span href='#' className='notification' onClick={handleClickCart}>
          <i className='fas fa-shopping-cart' />
          <span className='badge'>15</span>
        </span>
      )}

      {/* search bar  */}
      <ul className={clicked ? 'menu-list' : 'menu-list close'}>
        {role === ('CUSTOMER' || 'GUEST') && <Searchbar />}
        {menuList}
      </ul>
    </nav>
  );
}

export default Navbar;

// onClick={handleClickLogout}
// role === 'GUEST' ?
// const menuList = MenuList.map(({ to, title }, index) => {
//   // const icon = title === 'Home' ? 'fa-home' : title === 'Login' ? 'fa-sign-in-alt' : 'fa-user-plus';
//   return (
//     <li key={index}>
//       <NavLink exact to={to} activeClassName='active'>
//         {/* <i className={`fas ${icon} `} />
//         <span>&nbsp;{title}</span> */}
//       </NavLink>
//     </li>
//   );
// });
