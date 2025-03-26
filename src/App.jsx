import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AlarmIntakeForm from "./pages/Alarm/alarmIntakeForm/AlarmIntakeForm.jsx";
import User from "./pages/User/User.jsx";
import Users from "./pages/User/Users.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alarm" element={<AlarmIntakeForm />} />
          {/*<Route path="/alarms" element={<Alarms />} />*/}
          <Route path="/user" element={<User />} />
          <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
