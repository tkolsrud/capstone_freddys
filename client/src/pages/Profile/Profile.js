import React from 'react';
import { Redirect } from 'react-router-dom';

import { loggedIn } from '../../recoil/user';
import { useRecoilValue } from 'recoil';

const ProfileContainer = () => {
    const isLoggedIn = useRecoilValue(loggedIn);

    if (!isLoggedIn) {
        return <Redirect to='/login' />
    }
    return (
        <h1>Profile Container</h1>
    );
}

export default ProfileContainer;