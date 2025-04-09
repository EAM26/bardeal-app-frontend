import React from 'react';
import './Home.css'
import { useUser } from "../../context/useUser.js";

function Home() {
    const { user } = useUser();

    return (
        <div className="outer-container">
            <h1>Homepage</h1>

            {user ? (
                <p>Welcome, {user.username}!</p>
            ) : (
                <div>
                    <p>You are not logged in.</p>
                    <button onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}>
                        Login with Google
                    </button>

                </div>

            )}
            <img src="/images/under_construction.png" alt="under construction"/>
        </div>
    );
}

export default Home;
