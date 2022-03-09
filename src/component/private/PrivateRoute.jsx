import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    console.log(user.email)
    const location = useLocation();
    if(isLoading){
        return (
          <div className='w-screen h-screen'>
          <h1 className="text-2xl text-primary font-semibold my-36 mx-auto">Loading.....</h1>
          </div>
        ) 
     }
     if(user.email){
        return children;
    }
    return <Navigate to="/login" state={{from : location}} />;
};

export default PrivateRoute;