import React from 'react';

import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";
import { useState } from 'react';



const Login = () => {
    const [error, setError] = useState('');
    const { signInUsingGoogle, setLoading, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redir_uri = location.state?.from || '/home';
    // console.log('came from', location.state?.from)

    const handleGoogleLog = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redir_uri);
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false));
    }



    return (
        <div className="mt-5 pt-5">
            <h2 className="mb-5">Please Login</h2>

            <button onClick={handleGoogleLog} className="btn btn-primary btn-lg p-3">Google Sign In</button>

            {/* error message */}

            <h5 className="container text-center mt-5 text-danger">{error}</h5>
        </div>
    );
};

export default Login;

