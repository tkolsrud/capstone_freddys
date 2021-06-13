import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GuitarsContainer from '../pages/GuitarsContainer/GuitarsContainer';
import GuitarShowContainer from '../pages/GuitarShowContainer/GuitarShowContainer';
import Profile from '../pages/Profile/Profile';
import CartContainer from '../pages/CartContainer/CartContainer';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import CheckoutContainer from '../pages/CheckoutContainer/CheckoutContainer';
import ConfirmContainer from '../pages/ConfrimContainer/ConfirmContainer';
import CreateNew from '../pages/CreateNew/CreateNew';
import Update from '../pages/Update/Update';
import Home from '../pages/Home/Home';

import { loggedIn } from '../recoil/user';
import { useRecoilValue } from 'recoil';


function Routes(props) {
    const isLoggedIn = useRecoilValue(loggedIn);

    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/guitars' component={GuitarsContainer} />
            <Route exact path='/guitars/create' component={CreateNew} />
            <Route exact path="/profile" component={() => <Profile authorized={isLoggedIn} />} />
            <Route exact path="/profile/cart" component={() => <CartContainer authorized={isLoggedIn} />} />
            <Route exact path="/profile/cart/checkout" component={CheckoutContainer} />
            <Route exact path="/profile/cart/checkout/confirm" component={ConfirmContainer} />
            <Route exact path='/guitars/:id' component={GuitarShowContainer} />
            <Route exact path='/guitars/:id/update' component={Update} />
        </Switch>
    );
}

export default Routes;