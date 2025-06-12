import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

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
        <div className="navbar bg-base-300 shadow-sm">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="btn btn-ghost text-xl">
                    DLG Sys
                </Link>

                {isAuthenticated && (
                    <button
                        type="button"
                        className="btn text-lg w-fit"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Nav;
