import './App.css';
import './index.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Settings from "./pages/settings.jsx";
import Profile from "./components/settings/profile/profile.jsx";
import DashboardSettings from "./components/settings/dashboard/dashboardSettings.jsx";
import Customization from "./components/settings/customization/customization.jsx";
import Notifications from "./components/settings/notification/notification.jsx";
import {SettingsProvider} from "./components/settings/settings-context.jsx";
import Support from "./components/settings/support/support.jsx";
import DataCenter from "./pages/data-center.jsx";
import Transactions from "./components/data-center/components/transactions/transactions.jsx";
import Reports from "./components/data-center/components/reports/reports.jsx";
import Milestones from "./components/data-center/components/milestones/milestones.jsx";
import Goals from "./components/data-center/components/goals/goals.jsx";

function App() {
    return (
        <>
            <SettingsProvider>
                <Routes>
                    <Route path="/settings" element={<Settings />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="dashboard" element={<DashboardSettings />} />
                        <Route path="support" element={<Support />} />
                        <Route path="customization" element={<Customization />} />
                        <Route path="notification" element={<Notifications />} />
                    </Route>
                    <Route path="/data-center" element={<DataCenter />}>
                        <Route path="transactions" element={<Transactions />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="milestones" element={<Milestones />} />
                        <Route path="goals" element={<Goals />} />
                    </Route>
                </Routes>
            </SettingsProvider>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    );
}

export default App;
