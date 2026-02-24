
const Footer = () => {
    return (
        <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-600 dark:text-slate-400 font-medium flex items-center justify-center gap-2">
                    © {new Date().getFullYear()} The Creative Scientist. Made with
                    <i className="fa-solid fa-heart text-pink-500 animate-pulse"></i>
                    & Science.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
