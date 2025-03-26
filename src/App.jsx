import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import AlarmIntakeForm from "./pages/alarmIntakeForm/AlarmIntakeForm.jsx";
import User from "./pages/User.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alarm" element={<AlarmIntakeForm />} />
          <Route path="/user" element={<User />} />
      </Routes>
    </>
  )
}

export default App
