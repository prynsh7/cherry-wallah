import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Products from '../pages/Products';
import { ROUTES } from './RouterConfig';
import UserLayout from '../components/Layout/UserLayout'


// User Profiles
import User from '../pages/User/User';
import UserAddresses from '../pages/User/Address'
import UserPassword from '../pages/User/Password'
import UserCoupons from '../pages/User/Coupons'
import UserLoyaltyPoints from '../pages/User/LoyaltyPoints'
import ProductPage from '../pages/ProductPage/ProductPage';
import Category from '../components/User/Category';


const Router = () => {

  const RouteWithRole = ({ Element }) => {
    return (
      <>
        <Element />
      </>
    );
  }

  const RouteWithUser = ({ Element }) => {
    return (
      <>
        <UserLayout>
          <Element />
        </UserLayout>
      </>
    );
  }

  return (
    <div>
      <Routes>
        <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}>
          
        <Route index element={<RouteWithRole Element={Category} />}></Route>
        <Route index path="" element={<RouteWithRole Element={Category} />}></Route>
        <Route exact path={ROUTES.Produts} element={<RouteWithRole Element={Products} />}></Route>
        <Route exact path={ROUTES.ProductDetail} element={<RouteWithRole Element={ProductPage} />}></Route>
          
        </Route>
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>



        //User Profile
        <Route exact path={ROUTES.User.root} element={<RouteWithUser Element={User} />}></Route>
        <Route exact path={ROUTES.User.address} element={<RouteWithUser Element={UserAddresses} />}></Route>
        <Route exact path={ROUTES.User.password} element={<RouteWithUser Element={UserPassword} />}></Route>
        <Route exact path={ROUTES.User.coupons} element={<RouteWithUser Element={UserCoupons} />}></Route>
        <Route exact path={ROUTES.User.loyaltyPoints} element={<RouteWithUser Element={UserLoyaltyPoints} />}></Route>
      </Routes>
    </div>
  )
}

export default Router