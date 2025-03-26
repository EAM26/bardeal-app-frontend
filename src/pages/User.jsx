import React, {useEffect} from 'react';
import axios from "axios"

function User() {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/user", {
                    withCredentials: true
                });
                setUsers(response.data);
                console.log("Fetched users: ", response.data);
            } catch (e) {
                console.error(e);
            }
        }
        void fetchData();
    }, [])
    return (
        <div>
            {users.map((user) => (
                <div key={user.id} className="user"><table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            ))}
        </div>
    );
}

export default User;