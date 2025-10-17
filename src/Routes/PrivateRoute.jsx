import React, { use } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import Login from '../Pages/Login';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=use(AuthContext);
    if(isLoading){
        return <span className="loading loading-spinner text-error"></span>;
    }
    if(user){
        return children;
    }

    return <Navigate to={'/login'}></Navigate>;
};

export default PrivateRoute;