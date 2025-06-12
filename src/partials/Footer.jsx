const Footer = () => {
    return (
        <footer className="container mx-auto mt-20 footer sm:footer-horizontal footer-center border-t border-base-300 text-base-content p-4">
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()}, Delivery Label
                    Generator System - Project developed by{' '}
                    <a
                        href="https://www.linkedin.com/in/jill-bhatt"
                        target="_blank"
                        className="text-sky-500 hover:cursor-pointer hover:text-sky-400"
                    >
                        Jill Bhatt.
                    </a>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;
