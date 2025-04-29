import {NavLink} from "react-router-dom";
import Button from "../button/Button.jsx";
import {useUser} from "../../context/useUser.js"; // adjust path if needed
import './NavBar.css';

function Navbar() {
    const {user} = useUser();

    const handleLogout = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/logout`;
    };

    return (
        <div className="navbar">
            <div className="nav-links">

                <NavLink  className="nav-link" to="/"><h2>Home</h2></NavLink>
                <NavLink className="nav-link" to="/alarm"><h2>Alarm Intake</h2></NavLink>

                {(user?.role === 'ADMIN' || user?.role === 'MANAGER') && (
                    <>
                        <NavLink className="nav-link" to="/alarms"><h2>Alarms</h2></NavLink>
                        <NavLink className="nav-link" to="/users"><h2>Users</h2></NavLink>
                        <NavLink  className="nav-link" to="/user"><h2>New User</h2></NavLink>
                        <NavLink className="nav-link" to="/companies"><h2>Companies</h2></NavLink>
                    </>
                )}
            </div>
            <Button onClick={handleLogout} classname="general-button">Logout</Button>
        </div>
    );
}

export default Navbar;
