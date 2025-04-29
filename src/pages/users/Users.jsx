import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Users.css'
import '../../index.css'
import Button from "../../components/button/Button.jsx";
import Modal from "../../components/modal/Modal.jsx";
import FloatingMessage from "../../components/floatingMessage/FloatingMessage.jsx";

function Users() {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const [statusMessage, setStatusMessage] = useState(null)



    const handleDelete = (user) => {
        setUserToDelete(user);
        setModalOpen(true);
    }

    const confirmDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/users/${userToDelete.id}`, {
                withCredentials: true
            });

            setUsers(prevUsers => prevUsers.filter(user => user.id !== userToDelete.id));
            setModalOpen(false);
            setStatusMessage({type: 'success', message: 'User deleted successfully.'});

        } catch (error) {
            setModalOpen(false);
            setStatusMessage({type: 'error', message: 'Error in deleting User: '  + userToDelete.username
                    + '.' + error.response.data});
            console.error(error);
        } finally {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatusMessage(null);
            setUserToDelete(null);
        }

    }


    const cancelDelete =  () => {
        setModalOpen(false);
        setUserToDelete(null);
    }


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
        <div className="outer">
            {isModalOpen &&
                <Modal isOpen={isModalOpen} onClose={cancelDelete} className="delete-modal">
                    <p>Are you sure you want to delete <strong>{userToDelete?.username}</strong>?</p>
                    <div className="modal-buttons">
                        <Button type="button" classname="delete-button" onClick={confirmDelete}>Confirm</Button>
                        <Button type="button" classname="delete-button" onClick={cancelDelete}>Cancel</Button>
                    </div>
                </Modal>
            }

            {
                statusMessage && <FloatingMessage type={statusMessage.type} message={statusMessage.message} />
            }
                <table className="user-table">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Company Name</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.companyName}</td>
                        <Button type="button"  onClick={() => handleDelete(user)}>delete</Button>

                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
