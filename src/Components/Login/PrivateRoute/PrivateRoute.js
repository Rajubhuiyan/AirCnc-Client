import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const location = useLocation()

    const { user } = useAuth();

    if (user.email) {
        return children
    }

    return (
        <Navigate to="/login" state={{ from: location }} />
    );
};

export default PrivateRoute;