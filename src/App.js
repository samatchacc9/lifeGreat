import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ContainerCover from './components/Container/ContainerCover';
import CustomerRegister from './pages/CustomerRegister';
import Login from './pages/Login';
import Home from './pages/Home';
import CustomerProduct from './pages/CustomerProduct';
import CustomerProductDetail from './pages/CustomerProductDetail';
import CustomerCart from './pages/CustomerCart';
import CustomerPayment from './pages/CustomerPayment';
import TableOrderForCustomer from './components/Table/TableOrderForCustomer';
import ContainerStart from './components/Container/ContainerStart';
import CustomerOrderDetail from './pages/CustomerOrderDetail';
import CustomerOrder from './pages/CustomerOrder';
import CustomerProfile from './pages/CustomerProfile';
import FormCustomerUpdateProfile from './components/Form/FormCustomerUpdateProfile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <ContainerCover>
          {/* <Home /> */}
          {/* <Login /> */}
          {/* <CustomerRegister /> */}
          {/* <CustomerProduct /> */}
          {/* <CustomerProductDetail /> */}
          {/* <CustomerCart /> */}
          {/* <CustomerPayment /> */}
          {/* <CustomerOrder /> */}
          {/* <CustomerProfile /> */}
          <FormCustomerUpdateProfile />
        </ContainerCover>

        {/* <ContainerStart> */}
        {/* <CustomerOrder /> */}

        {/* </ContainerStart> */}
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
