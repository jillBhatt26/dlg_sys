import OrderForm from '../components/OrderForm';
import Invoice from '../components/Invoice';

const DashboardScreen = () => {
    return (
        <div className="container my-10 lg:my-20  mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
            <OrderForm />
            <Invoice />
        </div>
    );
};

export default DashboardScreen;
