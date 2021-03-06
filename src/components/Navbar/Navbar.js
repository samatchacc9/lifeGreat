import React from 'react';
import { GUEST, ADMIN, CUSTOMER } from './MenuList';
import { useState, useContext } from 'react';
import './Navbar.css';
import Searchbar from '../Searchbar/Searchbar';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { useHistory } from 'react-router-dom';
import { removeToken } from '../../services/localStorage';
import { CartContext } from '../../contexts/cartContext';
import { SearchContext } from '../../contexts/searchContext';
import Swal from 'sweetalert2';
function Navbar() {
  // set state ไปรับค่าเพื่อ rerendeใหม่
  const { user, setUser } = useContext(AuthContext);
  const { searchText } = useContext(SearchContext);

  const location = useLocation();

  // console.log(location.pathname);

  const { cartItems } = useContext(CartContext);

  const qty = cartItems.reduce((acumulator, item) => acumulator + item.qty, 0);

  // console.log(cartItems);
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

      Swal.fire({
        title: 'ต้องการออกจากระบบหรือไม่',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/');
          removeToken();
          setUser(null); // update sate
        }
      });
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

      {/*===================================================== cart icon */}

      {role === 'CUSTOMER' && (
        <span className='notification' onClick={handleClickCart}>
          <i className='fas fa-shopping-cart' />
          {/* <span className='badge'>{cartItems.length}</span> */}
          <span className='badge'>{qty}</span>
        </span>
      )}

      <div className='menu-icon' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      {/* search bar  */}

      <ul className={clicked ? 'menu-list' : 'menu-list close'}>
        {role === ('CUSTOMER' || 'GUEST') && location.pathname === '/CustomerProduct' && <Searchbar />}
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
