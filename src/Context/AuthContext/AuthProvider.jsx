import React from 'react';
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const info={
        name:"ariful",
        roll: 10,
    }
    return (
        <AuthContext value={info}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;