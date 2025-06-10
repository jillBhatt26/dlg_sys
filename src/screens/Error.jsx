import { useNavigate } from 'react-router-dom';

const ErrorScreen = () => {
    // hooks
    const navigate = useNavigate();

    return (
        <div className="container m-auto h-96 flex flex-row justify-center items-center">
            <div className="flex flex-col space-y-10">
                <p className="text-xl">
                    An error occurred. Please try again later.
                </p>

                <button
                    type="button"
                    className="bg-sky-500 text-white hover:cursor-pointer py-2 px-10 text-lg rounded-md max-w-xs mx-auto"
                    onClick={() => navigate('/', { replace: true })}
                >
                    Home
                </button>
            </div>
        </div>
    );
};

export default ErrorScreen;
