import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
    // states
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // effects
    useEffect(() => {
        const isAuthenticated =
            JSON.parse(localStorage.getItem('isAuthenticated')) ?? false;

        setIsAuthenticated(isAuthenticated);
        setIsLoading(false);
    }, []);

    if (isLoading) return;

    if (!isAuthenticated) return <Navigate to="/login" />;

    return <Outlet />;
};

export default PrivateRoute;
