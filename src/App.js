
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Component/Home/Home.js'
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Destination from './Component/Destination/Destination';
import { createContext, useState } from 'react';
import NotFound from './Component/NotFound/NotFound';

import DestinationProcess from './DestiantionProcess/DestinationProcess';
import Header from './Component/Header/Header';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App"> 
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/contacts">
              <Contact></Contact>
            </Route>
            <PrivateRoute exact path="/destination/:type/:start/:end">
              <DestinationProcess></DestinationProcess>
            </PrivateRoute>
            <PrivateRoute exact path="/destination/:type/search">
              <Destination></Destination>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
