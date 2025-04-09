import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="log-outer-container">
            <h1>Login Page</h1>
            <button onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}>
                Login with Google
            </button>
        </div>
    );
}


export default Login;