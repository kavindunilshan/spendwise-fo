import './App.css';
import './index.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Settings from "./pages/settings.jsx";
import Profile from "./components/settings/profile.jsx";
import Account from "./components/settings/account.jsx";
import Appearance from "./components/settings/appearance.jsx";
import Customization from "./components/settings/customization.jsx";
import Notifications from "./components/settings/notification.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings/*" element={<Settings />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="account" element={<Account />} />
                    <Route path="appearance" element={<Appearance />} />
                    <Route path="customization" element={<Customization />} />
                    <Route path="notifications" element={<Notifications />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
