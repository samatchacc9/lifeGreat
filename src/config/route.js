//========== GUEST ==========
import Home from '../pages/Home';
import Login from '../pages/Login';
import CustomerRegister from '../pages/CustomerRegister';
//===============================

//==========  ADMIN ==========
import AdminManageOrder from '../pages/AdminManageOrder';
import AdminManageCategory from '../pages/AdminManageCategory';
import AdminManageProduct from '../pages/AdminManageProduct';
import AdminUpdateOrder from '../pages/AdminUpdateOrder';
import AdminAddCategory from '../pages/AdminAddCategory';
import AdminUpdateCategory from '../pages/AdminUpdateCategory';
import AdminAddProduct from '../pages/AdminAddProduct';
import AdminUpdateProduct from '../pages/AdminUpdateProduct';
//===============================

//==========  CUSTOMER ==========
import CustomerProfile from '../pages/CustomerProfile';
import CustomerProduct from '../pages/CustomerProduct';
import CustomerOrder from '../pages/CustomerOrder';
import CustomerProfileUpdate from '../pages/CustomerProfileUpdate';
import CustomerProductDetail from '../pages/CustomerProductDetail';
import CustomerPayment from '../pages/CustomerPayment';
import CustomerOrderDetail from '../pages/CustomerOrderDetail';
import CustomerCart from '../pages/CustomerCart';
//===============================

const route = {
  GUEST: {
    route: [
      {
        path: '/',
        component: Home,
      },
      {
        path: '/Login',
        component: Login,
      },
      {
        path: '/CustomerRegister',
        component: CustomerRegister,
      },
    ],
    redirect: '/',
  },
  ADMIN: {
    route: [
      {
        path: '/ManageOrder',
        component: AdminManageOrder,
      },
      {
        path: '/ManageCategory',
        component: AdminManageCategory,
      },
      {
        path: '/ManageProduct',
        component: AdminManageProduct,
      },
      {
        path: '/AdminUpdateOrder/:id',
        component: AdminUpdateOrder,
      },
      {
        path: '/AdminAddCategory',
        component: AdminAddCategory,
      },
      {
        path: '/AdminUpdateCategory/:id',
        component: AdminUpdateCategory,
      },
      {
        path: '/AdminAddProduct',
        component: AdminAddProduct,
      },
      {
        path: '/AdminUpdateProduct/:id',
        component: AdminUpdateProduct,
      },
    ],
    redirect: '/Login',
  },
  CUSTOMER: {
    route: [
      {
        path: '/CustomerProfile',
        component: CustomerProfile,
      },
      {
        path: '/CustomerProduct',
        component: CustomerProduct,
      },
      ,
      {
        path: '/CustomerOrder',
        component: CustomerOrder,
      },
      {
        path: '/CustomerOrder',
        component: CustomerOrder,
      },
      {
        path: '/CustomerProfileUpdate/:id',
        component: CustomerProfileUpdate,
      },
      {
        path: '/CustomerProductDetail/:id',
        component: CustomerProductDetail,
      },
      {
        path: '/CustomerPayment',
        component: CustomerPayment,
      },
      {
        path: '/CustomerOrder',
        component: CustomerOrder,
      },
      {
        path: '/CustomerOrderDetail',
        component: CustomerOrderDetail,
      },
      {
        path: '/CustomerCart',
        component: CustomerCart,
      },
    ],
    redirect: '/',
  },
};

export default route;
