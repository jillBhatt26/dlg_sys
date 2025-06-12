import { Outlet } from 'react-router-dom';
import Nav from '../partials/Nav';
import Footer from '../partials/Footer';

const AppLayout = () => {
    return (
        <>
            <Nav />

            <Outlet />

            <Footer />
        </>
    );
};

export default AppLayout;
