import { NavLink } from "react-router-dom";
import Button from "../button/Button.jsx";
import { useUser } from "../../context/useUser.js"; // adjust path if needed
import './NavBar.css';

function Navbar() {
    const { user } = useUser();

    const handleLogout = () => {
        window.location.href = `${import.meta.env.VITE_API_URL}/logout`;
    };

    return (
        <div className="nav-links">
            <NavLink to="/"><h2>Home</h2></NavLink>
            <NavLink to="/alarm"><h2>Alarm Intake</h2></NavLink>

            {(user?.role === 'ADMIN' || user?.role === 'MANAGER') && (
                <>
                    <NavLink to="/alarms"><h2>Alarms</h2></NavLink>
                    <NavLink to="/users"><h2>Users</h2></NavLink>
                    <NavLink to="/user"><h2>New User</h2></NavLink>
                </>
            )}

            <Button onClick={handleLogout} classname="logout">Logout</Button>
        </div>
    );
}

export default Navbar;
