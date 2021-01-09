import React from 'react';
import Login from '../../components/login/login.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in.styles.scss';

const SignInPage = () => (
    <div className='sign-in'>
        <Login />
        <SignUp />
    </div>
);

export default SignInPage;