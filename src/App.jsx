import './App.css'
import './index.css'
import Home from "./pages/home.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </>
  )
}

export default App
