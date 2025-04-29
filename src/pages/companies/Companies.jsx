import React, {useEffect, useState} from 'react';
import axios from "axios";

function Companies() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/companies`, {
                    withCredentials: true
                });
                setCompanies(response.data);
                console.log("Fetched companies: " + response.data);
            } catch (e) {
                console.error(e);
            }
        };
        void fetchData();
    }, [])
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>PhoneNumber</th>
                    <th>Zipcode</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                {companies.map((company) => (
                    <tr key={company.id}>
                        <td>{company.name}</td>
                        <td>{company.email}</td>
                        <td>{company.address}</td>
                        <td>{company.phoneNumber}</td>
                        <td>{company.zipcode}</td>
                        <td>{company.city}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Companies;