import './App.css'
import './index.css'
import Home from "./pages/home.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import Settings from "./pages/settings.jsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/" element={<Home/>} />
        </Routes>
    </>
  )
}

export default App
