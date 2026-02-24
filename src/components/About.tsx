import React from 'react';

const About = () => {
    const skills = [
        { icon: 'fa-flask', title: 'Microbiology', desc: 'Lab Research, Data Analysis, Molecular Biology' },
        { icon: 'fa-palette', title: 'Fine Arts', desc: 'Oil Painting, Sketching, Color Theory' },
        { icon: 'fa-microscope', title: 'Research', desc: 'Experiment Design, Scientific Writing' },
        { icon: 'fa-pen-nib', title: 'Illustration', desc: 'Scientific Illustration, Digital Art' }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    <div className="lg:w-1/2">
                        <div className="glass p-8 md:p-12 rounded-3xl relative group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-800 dark:text-white relative z-10">
                                The Scientist & <br className="hidden sm:block" /> The Artist
                            </h2>

                            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 relative z-10 leading-relaxed">
                                <p>
                                    As a <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Microbiologist</strong>, I study the intricate details of life, analyzing
                                    data and understanding the complex systems that rule our world.
                                </p>
                                <p>
                                    As a <strong className="text-pink-600 dark:text-pink-400 font-semibold">Painter</strong>, I translate these observations into vibrant expressions.
                                    My art is inspired by organic forms, cellular structures, and the colors of nature.
                                </p>
                                <p className="italic text-slate-500 dark:text-slate-400 border-l-4 border-indigo-500 pl-4 py-1">
                                    I believe that science and art are not opposites, but two different lenses to view the
                                    same beautiful reality.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="glass p-6 rounded-2xl transition-hover group cursor-default"
                                >
                                    <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                                        <i className={`fa-solid ${skill.icon} text-2xl text-indigo-600 dark:text-indigo-400`}></i>
                                    </div>
                                    <h5 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-200">{skill.title}</h5>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
