import React from 'react';
import { useUesrContext } from '../context/userContext';

const Home = () => {
    const {user} = useUesrContext();
    return (
        <div>
            <h1>You are now logged in as , {user.name}</h1>
            {/* {!user.isGuestUser && (
                <button onClick={logOut}>LogOut</button>
            )} */}
        </div>
    );
};

export default Home;