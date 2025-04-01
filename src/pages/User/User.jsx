import React, {useState} from 'react';
import Button from "../../components/button/Button.jsx";
import axios from "axios";


function User() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post('http://localhost:8080/user', formData, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 201) {
            console.log("Created user  ", response.data);
        } else {
            console.log("Error creating user");
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add User</h2>
                <label htmlFor="username">Name</label>
                <input
                    name="username"
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}/>
                <label htmlFor="role">Role</label>
                <input
                    name="role"
                    id="role"
                    type="text"
                    value={formData.role}
                    onChange={handleChange}/>
                <Button type="submit">Submit</Button>

            </form>
        </div>
    );
}

export default User;