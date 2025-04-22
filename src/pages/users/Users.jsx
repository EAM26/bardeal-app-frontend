import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Users.css'
import Button from "../../components/button/Button.jsx";

function Users() {
    const [users, setUsers] = useState([]);
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/users/${id}`, {
                withCredentials: true
            });

            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
            console.log(`User with id ${id} deleted`);
        } catch (e) {
            console.error(`Failed to delete user with id ${id}`, e);
        }
    };


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
                    {/*<th>Company Id</th>*/}
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
                        {/*<td className="center-content">{user.companyId}</td>*/}
                        <td>{user.companyName}</td>
                        <Button type="button" onClick={() => handleDelete(user.id)}>delete</Button>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
