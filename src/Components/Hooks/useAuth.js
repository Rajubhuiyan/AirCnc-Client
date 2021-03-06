import { useContext } from 'react';
import { authContext } from '../Contexts/AuthProvide/AuthProvider';

const useAuth = () => {

    const auth = useContext(authContext);

    return auth;
};

export default useAuth;