import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css'

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
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
            <table className="user-table">
                <thead>
                <tr>
                    {/*<th>Id</th>*/}
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Company Id</th>
                    <th>Company Name</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        {/*<td>{user.id}</td>*/}
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td className="center-content">{user.companyId}</td>
                        <td>{user.companyName}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
