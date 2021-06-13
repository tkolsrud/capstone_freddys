import React from 'react';
import { Redirect } from 'react-router-dom';

import { loggedIn } from '../../recoil/user';
import { useRecoilValue } from 'recoil';

const CartContainer = () => {
    const isLoggedIn = useRecoilValue(loggedIn);

    if (!isLoggedIn) {
        return <Redirect to='/login' />
    }
    return (
        <div>Cart Container</div>
    );
}

export default CartContainer;