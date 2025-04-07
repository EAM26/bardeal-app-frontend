import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/users", {
                    withCredentials: true
                });
                setUsers(response.data);
                console.log("Fetched users: ", response.data);
            } catch (e) {
                console.error(e);
            }
        };
        void fetchData();
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
