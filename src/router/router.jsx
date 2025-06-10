import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import AppLayout from '../layout';

// Routes
import PrivateRoute from './PrivateRoutes';
import PublicRoute from './PublicRoutes';

// Screens
import DashboardScreen from '../screens/Dashboard';
import ErrorScreen from '../screens/Error';
import LoginScreen from '../screens/Login';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    {/* Private Routes */}
                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<DashboardScreen />} />
                    </Route>

                    {/* Public Routes */}
                    <Route element={<PublicRoute blockAuthenticated />}>
                        <Route path="/login" element={<LoginScreen />} />
                    </Route>

                    <Route element={<PublicRoute />}>
                        <Route path="/error" element={<ErrorScreen />} />
                        <Route path="*" element={<ErrorScreen />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
