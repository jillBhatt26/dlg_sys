import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    // states
    const [inputUsername, setInputUsername] = useState('test');
    const [inputPassword, setInputPassword] = useState('test123');

    // hooks
    const navigate = useNavigate();

    // event handlers
    const handleLoginFormSubmit = e => {
        e.preventDefault();

        if (!inputUsername) {
            alert('Username is required!');
        }

        if (!inputPassword) {
            alert('Password is required!');
        }

        if (inputUsername !== 'test' && inputPassword !== 'test123')
            return alert('Incorrect credentials!');

        localStorage.setItem('isAuthenticated', JSON.stringify(true));

        return navigate('/', { replace: true });
    };

    return (
        <div className="container mx-auto">
            <form
                className="text-center mx-auto flex flex-col justify-center space-y-5"
                onSubmit={handleLoginFormSubmit}
            >
                <h1 className="text-4xl mb-10">Login</h1>

                <label className="input mx-auto">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </g>
                    </svg>
                    <input
                        type="text"
                        required
                        placeholder="Username"
                        value={inputUsername}
                        onChange={e => setInputUsername(e.target.value)}
                    />
                </label>

                <label className="input mx-auto">
                    <svg
                        className="h-[1em] opacity-50"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                            <circle
                                cx="16.5"
                                cy="7.5"
                                r=".5"
                                fill="currentColor"
                            ></circle>
                        </g>
                    </svg>
                    <input
                        type="password"
                        required
                        placeholder="Password"
                        value={inputPassword}
                        onChange={e => setInputPassword(e.target.value)}
                    />
                </label>

                <button className="text-lg btn btn-info w-xs mx-auto text-white">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;
