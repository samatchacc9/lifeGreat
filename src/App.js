import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ContainerCover from './components/Container/ContainerCover';
// import CustomerRegister from './pages/CustomerRegister';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import CustomerProduct from './pages/CustomerProduct';
// import CustomerProductDetail from './pages/CustomerProductDetail';
// import CustomerCart from './pages/CustomerCart';
// import CustomerPayment from './pages/CustomerPayment';
// import TableOrderForCustomer from './components/Table/TableOrderForCustomer';
// import ContainerStart from './components/Container/ContainerStart';
// import CustomerOrderDetail from './pages/CustomerOrderDetail';
// import CustomerOrder from './pages/CustomerOrder';
// import CustomerProfile from './pages/CustomerProfile';
// import FormCustomerUpdateProfile from './components/Form/FormCustomerUpdateProfile';
// import AdminManageOrder from './pages/AdminManageOrder';
// import SearchOrderForAdmin from './components/Searchbar/SearchOrderForAdmin';
// import AdminManageProduct from './pages/AdminManageProduct';
// import AdminManageCategory from './pages/AdminManageCategory';
// import AdminAddCategory from './pages/AdminAddCategory';
// import AdminUpdateCategory from './pages/AdminUpdateCategory';
// import AdminAddProduct from './pages/AdminAddProduct';
// import AdminUpdateProduct from './pages/AdminUpdateProduct';
// import AdminUpdateOrder from './pages/AdminUpdateOrder';

// import { AuthContext } from './contexts/userAuthencontext';
// import { useContext } from 'react';

import { AuthContext } from './contexts/authContext';
import { useContext } from 'react';
import routes from './config/route';

function App() {
  // const { user } = useContext(AuthContext);
  const { role } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      <ContainerCover>
        <Switch>
          {routes[role].route.map((item) => (
            <Route key={item.path} exact path={item.path} component={item.component} />
          ))}
          <Redirect to={routes[role].redirect} />
        </Switch>

        {/* <Home /> */}
        {/* <Login /> */}
        {/* <CustomerRegister /> */}
        {/* <CustomerProduct /> */}
        {/* <CustomerProductDetail /> */}
        {/* <CustomerCart /> */}
        {/* <CustomerPayment /> */}
        {/* <CustomerOrder /> */}
        {/* <CustomerProfile /> */}
        {/* <FormCustomerUpdateProfile /> */}
        {/* <AdminManageOrder /> */}
        {/* <AdminManageProduct /> */}
        {/* <AdminManageCategory /> */}
        {/* <AdminAddCategory /> */}
        {/* <AdminUpdateCategory /> */}
        {/* <AdminAddProduct /> */}
        {/* <AdminUpdateProduct /> */}
        {/* <AdminUpdateOrder /> */}
      </ContainerCover>
      <Footer />
      {/* <ContainerStart>
          <CustomerOrder />
        </ContainerStart> */}
    </>
  );
}

export default App;
