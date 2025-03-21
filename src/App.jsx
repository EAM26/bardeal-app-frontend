import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./home/Home.jsx";
import IntakeForm from "./old/IntakeForm.jsx";
import AlarmIntakeForm from "./alarmIntakeForm/AlarmIntakeForm.jsx";

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intake-form" element={<IntakeForm />} />
          <Route path="/alarm" element={<AlarmIntakeForm />} />
      </Routes>
    </>
  )
}

export default App
