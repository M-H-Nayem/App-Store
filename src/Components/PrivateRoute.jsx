import React, { use } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
   
    let { user, loading } = use(AuthContext)
    

    let location = useLocation()
    console.log(location);
    if (loading) {
    return <div className='flex justify-center items-center w-full h-screen'><span className="loading loading-spinner loading-xl"></span></div>
}
    if (user && user?.email) {
        return children;
        
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
    
};

export default PrivateRoute;