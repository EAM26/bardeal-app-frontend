import React, {useEffect, useState} from 'react';
import axios from "axios";
import '../../index.css'
import Button from "../../components/button/Button.jsx";
import Modal from "../../components/modal/Modal.jsx";
import FloatingMessage from "../../components/floatingMessage/FloatingMessage.jsx";
import MyTable from "../../components/myTable/MyTable.jsx";

function Companies() {
    const [companies, setCompanies] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [companyToDelete, setCompanyToDelete] = useState(null);
    const [statusMessage, setStatusMessage] = useState(null)

    const handleDelete = (company) => {
        setCompanyToDelete(company);
        setModalOpen(true);
    }

    const confirmDelete = async () => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/companies/${companyToDelete.id}`, {
                withCredentials: true
            });

            setCompanies(prevUsers => prevUsers.filter(user => user.id !== companyToDelete.id));
            setModalOpen(false);
            setStatusMessage({type: 'success', message: 'User deleted successfully.'});

        } catch (error) {
            setModalOpen(false);
            setStatusMessage({type: 'error', message: 'Error in deleting User: '  + companyToDelete.username
                    + '.' + error.response.data});
            console.error(error);
        } finally {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setStatusMessage(null);
            setCompanyToDelete(null);
        }
    }

    const cancelDelete = () => {
        setModalOpen(false);
        setCompanyToDelete(null);
    }



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
        <>
            {isModalOpen &&
                <Modal isOpen={isModalOpen} onClose={cancelDelete} className="delete-modal">
                    <p>Are you sure you want to delete <strong>{companyToDelete?.username}</strong>?</p>
                    <div className="modal-buttons">
                        <Button type="button" classname="delete-button" onClick={confirmDelete}>Confirm</Button>
                        <Button type="button" classname="delete-button" onClick={cancelDelete}>Cancel</Button>
                    </div>
                </Modal>
            }

            {
                statusMessage && <FloatingMessage type={statusMessage.type} message={statusMessage.message}/>
            }
            <MyTable data={companies}
                     renderRowActions={(row) => (
                         <Button type="button" onClick={() => handleDelete(row)}>Delete</Button>
                     )}/>
        </>
    );
}

export default Companies;