import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ContainerCover from './components/Container/ContainerCover';

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
      </ContainerCover>
      <Footer />
    </>
  );
}

export default App;
