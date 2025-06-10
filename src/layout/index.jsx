import { Outlet } from 'react-router-dom';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

const AppLayout = () => {
    return (
        <div className="h-screen w-screen">
            <Nav />

            <Outlet />

            <Footer />
        </div>
    );
};

export default AppLayout;
