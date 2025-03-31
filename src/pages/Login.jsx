import React from 'react';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}>
                Login with Google
            </button>
        </div>
    );
}


export default Login;