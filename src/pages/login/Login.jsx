import React from 'react';
import './Login.css';
import Button from "../../components/button/Button.jsx";


function Login() {
    return (
        <div className="log-outer-container">
            {/*<h1>login Page</h1>*/}

            <Button classname='general-button login-button' onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/oauth2/authorization/google`
            }>  Login with Google
            </Button>
            <img className="image-login" src='/images/image-form-amigo.png' alt="Login Page"/>


        </div>
    );
}


export default Login;