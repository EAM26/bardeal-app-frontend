import React from 'react';
import { useUser } from "../../context/useUser.js";

function Home() {
    const { user } = useUser();

    return (
        <div>
            <h1>Homepage</h1>
            {user ? (
                <p>Welcome, {user.name}!</p>
            ) : (
                <div>
                    <p>You are not logged in.</p>
                    <button onClick={() => window.location.href = "http://localhost:8080/oauth2/authorization/google"}>
                        Login with Google
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;
