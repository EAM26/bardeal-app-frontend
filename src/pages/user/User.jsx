import React, {useEffect, useState} from 'react';
import Button from "../../components/button/Button.jsx";
import './user.css'
import axios from "axios";
import {useUser} from "../../context/useUser.js";
import FloatingMessage from "../../components/floatingMessage/FloatingMessage.jsx";


function User() {

    const [statusMessage, setStatusMessage] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
        companyId: ''
    });

    const user = useUser();

    const [companies, setCompanies] = useState([]);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        console.log("Form role: ", formData.role);

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/users`, formData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setStatusMessage({type: 'success', message: 'User successfully created.'});
            await new Promise(resolve => setTimeout(resolve, 4000));
            window.location.reload();

        } catch (e) {
            setStatusMessage({
                type: 'error', message: 'Error in creating User.\n' +
                    e.response.data
            });
            await new Promise(resolve => setTimeout(resolve, 4000));
            setStatusMessage(null)
            console.error(e);
        }


        setStatusMessage(null);
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log(user)
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/companies`, {
                    withCredentials: true
                });
                setCompanies(response.data);
                console.log("Fetched companies: ", response.data);
            } catch (e) {
                console.error(e);
            }
        };
        void fetchData();
    }, []);

    return (
        <div>
            {statusMessage && (
                <FloatingMessage type={statusMessage.type} message={statusMessage.message}/>
            )}
            <form
                className="user-form"
                onSubmit={handleSubmit}>
                <h2>Add User</h2>
                <div className="user-form-content">
                    <div className="user-form-row">
                        <label htmlFor="username">Name</label>
                        <input
                            name="username"
                            id="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}/>
                    </div>
                    <div className="user-form-row"><label htmlFor="email">Email</label>
                        <input
                            name="email"
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}/></div>
                    <div className="user-form-row"><label htmlFor="role">Role</label>
                        <select
                            name="role"
                            id="role"
                            value={formData.role}
                            onChange={handleChange}>
                            <option value="">-- Select Role --</option>
                            <option value="ADMIN">ADMIN</option>
                            <option value="MANAGER">MANAGER</option>
                            <option value="USER">USER</option>
                        </select></div>
                    <div className="user-form-row"><label htmlFor="companyId">Company</label>
                        <select
                            name="companyId"
                            id="companyId"
                            value={formData.companyId}
                            onChange={handleChange}
                        >
                            <option value="">-- Select Role --</option>
                            {
                                companies.map((company) => (
                                    <option key={company.id} value={company.id}>{company.name}</option>
                                ))
                            }

                        </select>
                    </div>
                </div>
                <Button type="submit">Submit</Button>

            </form>
        </div>
    );
}

export default User;