import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = ({ blockAuthenticated }) => {
    // states
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // effects
    useEffect(() => {
        const isAuthenticated =
            localStorage.getItem('isAuthenticated') ?? false;

        setIsAuthenticated(isAuthenticated);
        setIsLoading(false);
    }, []);

    if (isLoading) return;

    if (blockAuthenticated && isAuthenticated) return <Navigate to="/" />;

    if (!blockAuthenticated && isAuthenticated) return <Outlet />;

    return <Outlet />;
};

export default PublicRoute;
