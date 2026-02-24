
const Research = () => {
    const researches = [
        {
            icon: 'fa-dna',
            title: 'Futuristic Trend For Sustainable Ecosystem',
            desc: 'Plant Microbial Fuel Cell: Potential source of Bioelectricity generation',
            linkText: 'Read Abstract',
            color: 'indigo'
        },
        {
            icon: 'fa-bacterium',
            title: 'Basic Introduction on Bacteria And its Biology',
            desc: 'Bacillus Amyloliquefaciens.',
            linkText: 'View Data',
            color: 'purple'
        }
    ];

    const getColorClasses = (color: string) => {
        const map: Record<string, { bgAccent: string; iconBg: string; iconText: string; linkText: string }> = {
            indigo: {
                bgAccent: 'bg-indigo-500',
                iconBg: 'bg-indigo-100 dark:bg-indigo-900/30',
                iconText: 'text-indigo-600 dark:text-indigo-400',
                linkText: 'text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300'
            },
            purple: {
                bgAccent: 'bg-purple-500',
                iconBg: 'bg-purple-100 dark:bg-purple-900/30',
                iconText: 'text-purple-600 dark:text-purple-400',
                linkText: 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300'
            }
        };
        return map[color] || map.indigo;
    };

    return (
        <section id="scientific-work" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2 block">
                        Research
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                        Contributions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {researches.map((res, index) => (
                        <div key={index} className="glass p-8 md:p-10 rounded-3xl relative group hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className={`absolute -top-10 -right-10 w-40 h-40 ${getColorClasses(res.color).bgAccent} rounded-full mix-blend-multiply filter blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-16 h-16 rounded-2xl ${getColorClasses(res.color).iconBg} flex items-center justify-center mb-6`}>
                                    <i className={`fa-solid ${res.icon} text-3xl ${getColorClasses(res.color).iconText}`}></i>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-slate-100">{res.title}</h3>

                                <p className="text-slate-600 dark:text-slate-400 mb-8 grow leading-relaxed">
                                    {res.desc}
                                </p>

                                <a href="#" className={`inline-flex items-center text-sm font-bold ${getColorClasses(res.color).linkText} self-start group/link`}>
                                    {res.linkText}
                                    <i className="fa-solid fa-arrow-right ml-2 transform group-hover/link:translate-x-1 transition-transform"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
