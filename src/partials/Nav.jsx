import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
    // states
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // hooks
    const navigate = useNavigate();
    const location = useLocation();

    // effects
    useEffect(() => {
        setIsAuthenticated(
            JSON.parse(localStorage.getItem('isAuthenticated')) ?? false
        );
    }, [location.pathname]);

    // event handlers
    const handleLogout = () => {
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
        setIsAuthenticated(false);
        navigate('/login', { replace: true });
    };

    return (
        <div className="container mx-auto navbar bg-base-100 shadow-sm flex justify-between">
            <a className="btn btn-ghost text-xl">DLG Sys</a>

            {isAuthenticated && (
                <button
                    type="button"
                    className="btn text-white text-lg w-fit"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            )}
        </div>
    );
};

export default Nav;
