import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ContainerCover from './components/Container/ContainerCover';
import CustomerRegister from './pages/CustomerRegister';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ContainerCover>
        <Switch>
          {/* <FormSearch /> */}
          {/* <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} /> */}
          {/* <CustomerOrder /> */}
          <CustomerRegister />
          {/* Customer */}
        </Switch>
      </ContainerCover>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
