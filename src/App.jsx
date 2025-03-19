import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import IntakeForm from "./IntakeForm.jsx";
import AlarmIntakeForm from "./AlarmIntakeForm.jsx";

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
