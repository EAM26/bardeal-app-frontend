import React from 'react';
import './Login.css';

// const myDomain = 'http://vrki.bardeal.nl';

const testVar = "test variable";

function Login() {
    return (
        <div className="log-outer-container">
            <h1>Login Page</h1>
            {import.meta.env.VITE_API_URL} {testVar}
            {/*<button onClick={() => window.location.href = "http://217.123.94.45:8080/oauth2/authorization/google"}>*/}
            {/*<button onClick={() => window.location.href = "http://vrki.bardeal.nl:8080/login/oauth2/code/google"}>*/}
            {/*<button onClick={() => window.location.href = "http://vrki.bardeal.nl:8080/oauth2/authorization/google"*/}
            {/*<button onClick={() => window.location.href = `${myDomain}:8080/oauth2/authorization/google`*/}
            <button onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/oauth2/authorization/google`
            }>

                Login with Google
            </button>
        </div>
    );
}


export default Login;