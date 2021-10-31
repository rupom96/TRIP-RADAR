import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {



    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);



    const auth = getAuth();


    const signInUsingGoogle = () => {



        setLoading(true);

        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)



    }

    //user state observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed
    }, [auth])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setLoading(false));
    }

    return {
        user,
        loading,
        setLoading,
        setUser,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;