import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/me`, {
                    withCredentials: true
                });
                setUser(response.data);
            } catch (error) {
                if (error.response && error.response.status !== 401) {
                    console.error("Unexpected error fetching user:", error);
                }
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext };  // context is fine here as a secondary export
