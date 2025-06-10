const Footer = () => {
    return (
        <footer className="footer fixed bottom-0 sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>
                    Copyright © {new Date().getFullYear()} - Project developed
                    by{' '}
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
