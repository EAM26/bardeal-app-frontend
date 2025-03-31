import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AlarmIntakeForm from "./pages/Alarm/alarmIntakeForm/AlarmIntakeForm.jsx";
import User from "./pages/User/User.jsx";
import Users from "./pages/User/Users.jsx";
import Alarms from "./pages/Alarm/alarmIntakeForm/Alarms.jsx";
import UserContextProvider from "./context/UserContext.jsx";

import Navbar from "./components/Navbar.jsx";

import Login from "./pages/Login.jsx";
import {useUser} from "./context/useUser.js";

function App() {
    const {user, loading} = useUser();

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <UserContextProvider>
                <Navbar/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                    <Route path="/alarm" element={user ? <AlarmIntakeForm/> : <Navigate to="/login"/>}/>
                    <Route path="/alarms"
                           element={user && (user.role === 'ADMIN' || user.role === 'MANAGER') ? <Alarms/> :
                               <Navigate to="/login"/>}/>
                    <Route path="/user" element={user && user.role === 'ADMIN' ? <User/> : <Navigate to="/login"/>}/>
                    <Route path="/users" element={user && user.role === 'ADMIN' ? <Users/> : <Navigate to="/login"/>}/>
                </Routes></UserContextProvider>
        </>
    );
}

export default App;
