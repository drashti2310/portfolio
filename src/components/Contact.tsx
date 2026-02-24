const Contact = () => {
    return (
        <section id="contact" className="py-24 relative bg-slate-100 dark:bg-slate-900/50">
            {/* Decorative gradient blob */}
            <div className="absolute -top-40 right-0 w-96 h-96 bg-linear-to-bl from-indigo-500/20 to-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-5/12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white leading-tight">
                            Let's Create Something <span className="text-gradient">Together</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                            Whether you're interested in scientific collaboration,
                            commissioning an artwork, or just want to say hi, I'd love to hear from you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center group">
                                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/50 transition-all duration-300">
                                    <i className="fa-solid fa-envelope text-2xl text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                                <div>
                                    <h6 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Email Me</h6>
                                    <a href="mailto:vintexdrashti01@gmail.com" className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                        vintexdrashti01@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center group">
                                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-full shadow-md flex items-center justify-center mr-6 group-hover:scale-110 group-hover:bg-purple-50 dark:group-hover:bg-purple-900/50 transition-all duration-300">
                                    <i className="fa-solid fa-phone text-2xl text-purple-600 dark:text-purple-400"></i>
                                </div>
                                <div>
                                    <h6 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Call Me</h6>
                                    <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
                                        +91 9876543210
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-7/12 w-full">
                        <div className="glass p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full"></div>

                            <form action="#" method="POST" className="relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-800 dark:text-slate-200"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-800 dark:text-slate-200"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-800 dark:text-slate-200"
                                        placeholder="How can I help you?"
                                    />
                                </div>

                                <div className="mb-8">
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-slate-800 dark:text-slate-200 resize-none"
                                        placeholder="Leave your message here..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-4 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg hover:shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
