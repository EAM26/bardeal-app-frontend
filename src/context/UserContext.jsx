import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);

export default function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get("http://localhost:8080/me", {
                    withCredentials: true
                });
                setUser(response.data); // { id, email, username, role }
            } catch {
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
