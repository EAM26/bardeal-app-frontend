import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AlarmIntakeForm from "./pages/Alarm/alarmIntakeForm/AlarmIntakeForm.jsx";
import User from "./pages/user/User.jsx";
import Users from "./pages/users/Users.jsx";
import Alarms from "./pages/Alarm/alarmIntakeForm/Alarms.jsx";
import UserContextProvider from "./context/UserContext.jsx";

import Navbar from "./components/navbar/Navbar.jsx";

import Login from "./pages/Login.jsx";
import {useUser} from "./context/useUser.js";

function App() {
    const {user, loading} = useUser();

    if (loading) return <p>Loading...</p>;

    return (
        <>
            <UserContextProvider>
                {user && <Navbar/>}
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/" element={user ? <Home/> : <Navigate to="/login"/>}/>
                    <Route path="/alarm" element={user ? <AlarmIntakeForm/> : <Navigate to="/login"/>}/>
                    <Route path="/alarms"
                           element={user && (user.role === 'ADMIN' || user.role === 'MANAGER') ? <Alarms/> :
                               <Navigate to="/login"/>}/>
                    <Route path="/user" element={user && (user.role === 'ADMIN' || user.role === 'MANAGER') ? <User/> : <Navigate to="/login"/>}/>
                    <Route path="/users" element={user && (user.role === 'ADMIN' || user.role === 'MANAGER') ? <Users/> : <Navigate to="/login"/>}/>
                </Routes></UserContextProvider>
        </>
    );
}

export default App;
// import './App.css';
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home.jsx";
// import AlarmIntakeForm from "./pages/Alarm/alarmIntakeForm/AlarmIntakeForm.jsx";
// import User from "./pages/user/User.jsx";
// import Users from "./pages/users/Users.jsx";
// import Alarms from "./pages/Alarm/alarmIntakeForm/Alarms.jsx";
// import Navbar from "./components/navbar/Navbar.jsx";
//
// function App() {
//     return (
//         <>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/alarm" element={<AlarmIntakeForm />} />
//                 <Route path="/alarms" element={<Alarms />} />
//                 <Route path="/user" element={<User />} />
//                 <Route path="/users" element={<Users />} />
//             </Routes>
//         </>
//     );
// }
//
// export default App;
