import { useEffect, useState } from 'react';
import initializeFirebase from '../Login/Firebase/firebase.init';
import { getAuth, signInWithPopup, onAuthStateChanged, GoogleAuthProvider, getIdToken, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

    const [searchData, setSearchData] = useState({});
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [reserveInfo, setReserveInfo] = useState({});
    const [payment, setPayment] = useState({});

    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    const signInWithGoogle = (location, navigate) => {



        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const destination = location?.state?.from || '/';
                navigate(destination)
            }).catch((error) => {
                console.log(error);
            });
    }





    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [auth]);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        searchData,
        setSearchData,
        signInWithGoogle,
        user,
        token,
        handleSignOut,
        reserveInfo,
        setReserveInfo,
        payment, 
        setPayment
        
    }
};

export default useFirebase;