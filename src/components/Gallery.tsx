
const Gallery = () => {
    const artworks = [
        { title: 'Landscapes', medium: 'Oil on Canvas', image: `${import.meta.env.BASE_URL}images/IMG_4814.jpeg` },
        { title: 'Landscapes', medium: 'Acrylic Pour', image: `${import.meta.env.BASE_URL}images/20231001_210629.jpg` },
        { title: 'Krishna', medium: 'god', image: `${import.meta.env.BASE_URL}images/20240809_183835.jpg` },
        { title: 'Krishna', medium: 'god', image: `${import.meta.env.BASE_URL}images/demo1.jpg` },
        { title: 'Krishna', medium: 'god', image: `${import.meta.env.BASE_URL}images/demo2.jpg` },
        { title: 'Krishna', medium: 'god', image: `${import.meta.env.BASE_URL}images/demo3.jpg` },
    ];

    return (
        <section id="gallery" className="py-24 relative bg-slate-100 dark:bg-slate-900/50">
            {/* Top transition gradient */}
            <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-slate-50 dark:from-slate-950 to-transparent"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2 block">
                        Portfolio
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white">
                        Artistic Gallery
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        A collection of my paintings and sketches, often inspired by the microscopic world.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {artworks.map((art, index) => (
                        <div key={index} className="group relative rounded-3xl overflow-hidden glass hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-4/3 w-full overflow-hidden">
                                <img
                                    src={art.image}
                                    alt={art.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>

                            <div className="p-6 relative bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-[0_-10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_30px_rgba(0,0,0,0.3)] border-t border-white/20 dark:border-white/10">
                                <h5 className="text-xl font-bold mb-1 text-slate-800 dark:text-slate-100">{art.title}</h5>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{art.medium}</p>

                                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <i className="fa-solid fa-arrow-right text-indigo-600 dark:text-indigo-400"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-medium transition-colors">
                        View Full Collection
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
