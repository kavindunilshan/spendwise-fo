import './App.css';
import './index.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Settings from "./pages/settings.jsx";
import Profile from "./components/settings/profile/profile.jsx";
import DashboardSettings from "./components/settings/dashboard/dashboardSettings.jsx";
import Payment from "./components/settings/customization/payment.jsx";
import Notifications from "./components/settings/notification/notification.jsx";
import {SettingsProvider} from "./components/settings/settings-context.jsx";
import Support from "./components/settings/support/support.jsx";
import DataCenter from "./pages/data-center.jsx";
import Transactions from "./components/data-center/components/transactions/transactions.jsx";
import Reports from "./components/data-center/components/reports/reports.jsx";
import Milestones from "./components/data-center/components/milestones/milestones.jsx";
import Goals from "./components/data-center/components/goals/goals.jsx";
import Advices from "./components/data-center/components/advices/advices.jsx";
import Response from "./components/data-center/components/advices/response.jsx";
import Learn from "./components/data-center/components/learn/learn.jsx";
import GeneralErrorBoundary from "./components/utils/GeneralErrorBoundary.jsx";
import ContactUs from "./components/home/contactus.jsx";

function App() {
    return (
        <GeneralErrorBoundary>
            <SettingsProvider>
                <Routes>
                    <Route path="/settings" element={<Settings />}>
                        <Route path="profile" element={<Profile />} />
                        <Route path="dashboard" element={<DashboardSettings />} />
                        <Route path="support" element={<Support />} />
                        <Route path="payment" element={<Payment />} />
                        <Route path="notification" element={<Notifications />} />
                    </Route>
                    <Route path="/data-center" element={<DataCenter />}>
                        <Route path="transactions" element={<Transactions />} />
                        <Route path="reports" element={<Reports />} />
                        <Route path="milestones" element={<Milestones />} />
                        <Route path="education" element={<Learn />} />
                        <Route path="goals" element={<Goals />} />
                        <Route path="advice" element={<Advices/>} />
                    </Route>
                    <Route path="/admin/data-center" element={<DataCenter />}>
                        <Route path="advice" element={<Response/>} />
                    </Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </SettingsProvider>
        </GeneralErrorBoundary>
    );
}

export default App;
