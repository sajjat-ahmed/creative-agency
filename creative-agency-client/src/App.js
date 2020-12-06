import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login/Login';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
import Order from './Component/Customer/Order/Order';
import ServiceList from './Component/Customer/ServiceList/ServiceList';
import Review from './Component/Customer/Review/Review';
import User from './Component/Admin/User/User';
import AddService from './Component/Admin/AddService/AddService';
import MakeAdmin from './Component/Admin/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <PrivateRoute path='/order'>
              <Order />
          </PrivateRoute>
          <PrivateRoute path='/serviceList'>
              <ServiceList />
          </PrivateRoute>
          <PrivateRoute path='/serviceOrder/:title'>
              <Order />
          </PrivateRoute>
          <PrivateRoute path='/review'>
              <Review />
          </PrivateRoute>
          <PrivateRoute path='/admin'>
              <User />
          </PrivateRoute>
          <PrivateRoute path='/adminService'>
              <User />
          </PrivateRoute>
          <PrivateRoute path='/addService'>
              <AddService />
          </PrivateRoute>
          <PrivateRoute path='/makeAdmin'>
              <MakeAdmin />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
