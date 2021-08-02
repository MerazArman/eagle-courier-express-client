import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ServicesDetailsPage from './components/ServicesDetailsPage/ServicesDetailsPage/ServicesDetailsPage';
import LoginPage from './components/LoginPage/LoginPage/LoginPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckoutPage from './components/CheckoutPage/CheckoutPage/CheckoutPage';
import OrderList from './components/Dashboard/User/OrderList/OrderList';
import Review from './components/Dashboard/User/Review/Review';
import AddNewServices from './components/Dashboard/Admin/AddNewServices/AddNewServices';
import AllServices from './components/Dashboard/Admin/AllServices/AllServices';
import AllOrderList from './components/Dashboard/Admin/AllOrderList/AllOrderList';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';




export const UserContext = createContext();
// export const OrdersStatus = createContext();

function App() {

  const [userLogged, setUserLogged] = useState({});
  // const [statusType, setStatusType ] = useState('Review');
  return (
    <UserContext.Provider value={[userLogged, setUserLogged]}>
      <Router >
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/serviceDetailsPage/:serviceKey">
            <ServicesDetailsPage></ServicesDetailsPage>
          </PrivateRoute>
          <PrivateRoute path="/checkoutPage">
            <CheckoutPage></CheckoutPage>
          </PrivateRoute>
          <PrivateRoute path="/shortOrderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addNewReview">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/addNewService">
            <AddNewServices></AddNewServices>
          </PrivateRoute>
          <PrivateRoute path="/allServices">
            <AllServices></AllServices>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/allOrderList">
            <AllOrderList></AllOrderList>
          </PrivateRoute>
          <Route path="/loginPage">
            <LoginPage></LoginPage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </UserContext.Provider>

  );
}

export default App;
