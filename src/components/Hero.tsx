
const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-40 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

                    <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                        <span className="text-sm md:text-base font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-4 block">
                            Welcome to my world
                        </span>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                            Exploring Life through <br className="hidden md:block" />
                            <span className="text-gradient">Science & Art</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            As a microbiologist and a painter, my life is driven by two distinct passions: the analytical pursuit of the microscopic world and the boundless freedom of artistic expression on canvas.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <a href="#gallery" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 text-center">
                                View Gallery
                            </a>
                            <a href="#about" className="w-full sm:w-auto px-8 py-3.5 rounded-full border-2 border-slate-300 dark:border-slate-700 font-semibold hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 text-center">
                                About Me
                            </a>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 text-2xl text-slate-500 dark:text-slate-400">
                            <a href="#" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors transform hover:scale-110">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors transform hover:scale-110">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors transform hover:scale-110">
                                <i className="fa-brands fa-behance"></i>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full max-w-md lg:max-w-full">
                        <div className="relative">
                            {/* Decorative element behind image */}
                            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500 to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-20 dark:opacity-40 animate-pulse"></div>

                            <div className="relative glass p-2 rounded-3xl transform transition-transform duration-500 hover:scale-[1.02]">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/pic1.png`}
                                    alt="Drashti Patel - Portfolio"
                                    className="w-full h-auto rounded-2xl shadow-xl object-cover object-center aspect-4/5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
