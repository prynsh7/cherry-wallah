import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Products from '../pages/Products';
import User from '../pages/User/User';
import { ROUTES } from './RouterConfig';
import UserLayout from '../components/Layout/UserLayout'

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
        <Route exact path={ROUTES.Home} element={<RouteWithRole Element={Home} />}></Route>
        <Route exact path={ROUTES.About} element={<RouteWithRole Element={About} />}></Route>
        <Route exact path={ROUTES.Produts} element={<RouteWithRole Element={Products} />}></Route>
        <Route exact path={ROUTES.User.root} element={<RouteWithUser Element={User} />}></Route>
      </Routes>
    </div>
  )
}

export default Router