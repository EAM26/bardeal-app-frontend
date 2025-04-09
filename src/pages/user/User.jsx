import React, {useEffect, useState} from 'react';
import Button from "../../components/button/Button.jsx";
import './user.css'
import axios from "axios";


function User() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        role: '',
        companyId: ''
    });

    const [companies, setCompanies] = useState([]);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        const response = await axios.post('http://localhost:8080/users', formData, {
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/companies", {
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
                            <option value="ADMIM">ADMIN</option>
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