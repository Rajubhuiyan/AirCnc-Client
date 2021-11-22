import { Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const {signInWithGoogle} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle(location, navigate)
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{width: '300px'}}>
                <Button onClick={handleGoogleLogin} className="reserve-button">Sign In With Google</Button>
            </div>
        </div>
    );
};

export default Login;