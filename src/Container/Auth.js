import React from 'react';
import LoginForm from "./LoginForm";
import Home from "./Home";
import { useUesrContext } from '../context/userContext';

const Auth = () => {
    const {user} = useUesrContext();
    return (
        <div>
            {user.isGuestUser ? <LoginForm/> : <Home/>}
        </div>
    );
};

export default Auth;