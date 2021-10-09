// export const MenuList = [
//   {
//     title: 'Home',
//     to: '/',
//   },
//   {
//     title: 'Login',
//     to: '/login',
//   },
//   {
//     title: 'Register',
//     to: '/register',
//   },
// ];

// ==========================================================================================================

//========== role ==========

//========== (1) GUEST ==========
export const GUEST = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Login',
    to: '/Login',
  },
  {
    title: 'Register',
    to: '/CustomerRegister',
  },
];

//==========(2) ADMIN ==========
export const ADMIN = [
  {
    title: 'Manage Order',
    to: '/ManageOrder',
  },
  {
    title: 'Manage Category',
    to: '/ManageCategory',
  },
  {
    title: 'Manage Product',
    to: '/ManageProduct',
  },
  {
    title: 'Logout',
    to: '/Logout',
  },
];

//==========(3) CUSTOMER ==========
export const CUSTOMER = [
  {
    title: 'Profile',
    to: '/CustomerProfile',
  },
  {
    title: 'Product',
    to: '/CustomerProduct',
  },
  {
    title: 'Order',
    to: '/CustomerOrder',
  },
  {
    title: 'Logout',
    to: '/Logout',
  },
];
