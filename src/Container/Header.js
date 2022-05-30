import React from 'react';
import { useUesrContext } from '../context/userContext';

const Header = () => {
    const {user,logOut} = useUesrContext();
    console.log(user);
    return (
        <div>
            <h3>Welcome {user.name}</h3>
            {!user.isGuestUser && (
                <button onClick={logOut}>LogOut</button>
            )}
        </div>
    );
};

export default Header;