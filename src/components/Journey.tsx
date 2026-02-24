
const Journey = () => {
    const experiences = [
        {
            period: 'June 2025 - Jan 2026',
            role: 'Blood Bank Technician',
            company: 'Nootan General Hospital, Visnagar',
            desc: 'Responsible for blood collection, storage, and distribution. Ensured compliance with safety protocols.',
            color: 'blue'
        },
        {
            period: 'Jan 2025 - Jun 2025',
            role: 'Blood Bank Technician - Intern',
            company: 'Nootan General Hospital, Visnagar',
            desc: 'Responsible for blood collection, storage, and distribution. Ensured compliance with safety protocols.',
            color: 'indigo'
        },
        {
            period: 'Jan 2023 - May 2023',
            role: 'Lab Technician',
            company: 'Jivandeep Pathology Laboratory',
            desc: 'Assisted in data collection, sample processing, and maintaining lab equipment.',
            color: 'purple'
        }
    ];

    const educations = [
        {
            period: 'Aug 2023 - May 2025',
            degree: 'M.Sc. Microbiology, CGPA - 8.31',
            institution: 'Sakalchand Patel University, Visnagar',
            desc: 'Specialized in Microbial Genetics. Thesis on antibiotic resistance patterns.',
            color: 'indigo'
        },
        {
            period: 'Aug 2022 - Jun 2023',
            degree: 'PG Diploma, MLT, CGPA - 8.75',
            institution: 'Sakalchand Patel University, Visnagar',
            desc: 'Focused on industrial applications and laboratory techniques.',
            color: 'pink'
        },
        {
            period: 'Aug 2019 - Jul 2022',
            degree: 'B.Sc. Microbiology, CGPA - 7.87',
            institution: 'Sakalchand Patel University, Visnagar',
            desc: 'Foundation in general biology, chemistry, and microbial diversity.',
            color: 'blue'
        }
    ];

    const getColorClasses = (color: string) => {
        const map: Record<string, { iconBg: string; iconText: string; badgeBg: string; badgeText: string }> = {
            blue: {
                iconBg: 'bg-blue-100 dark:bg-blue-900',
                iconText: 'text-blue-600 dark:text-blue-400',
                badgeBg: 'bg-blue-100 dark:bg-blue-900/40',
                badgeText: 'text-blue-700 dark:text-blue-300'
            },
            indigo: {
                iconBg: 'bg-indigo-100 dark:bg-indigo-900',
                iconText: 'text-indigo-600 dark:text-indigo-400',
                badgeBg: 'bg-indigo-100 dark:bg-indigo-900/40',
                badgeText: 'text-indigo-700 dark:text-indigo-300'
            },
            purple: {
                iconBg: 'bg-purple-100 dark:bg-purple-900',
                iconText: 'text-purple-600 dark:text-purple-400',
                badgeBg: 'bg-purple-100 dark:bg-purple-900/40',
                badgeText: 'text-purple-700 dark:text-purple-300'
            },
            pink: {
                iconBg: 'bg-pink-100 dark:bg-pink-900',
                iconText: 'text-pink-600 dark:text-pink-400',
                badgeBg: 'bg-pink-100 dark:bg-pink-900/40',
                badgeText: 'text-pink-700 dark:text-pink-300'
            }
        };
        return map[color] || map.blue;
    };

    return (
        <section id="journey" className="py-24 relative bg-slate-50 dark:bg-slate-950 overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200 dark:border-slate-800 rounded-full opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 dark:border-slate-800 rounded-full opacity-50"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase mb-2 block">
                        My Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white">
                        Experience & Education
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-800 dark:text-white">
                            <span className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-4">
                                <i className="fa-solid fa-briefcase text-indigo-600 dark:text-indigo-400"></i>
                            </span>
                            Experience
                        </h3>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(exp.color).iconBg} ${getColorClasses(exp.color).iconText}`}>
                                        <i className="fa-solid fa-circle text-[8px]"></i>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getColorClasses(exp.color).badgeBg} ${getColorClasses(exp.color).badgeText}`}>
                                            {exp.period}
                                        </span>
                                        <h5 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">{exp.role}</h5>
                                        <p className="font-medium text-slate-600 dark:text-slate-400 mb-2">{exp.company}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">{exp.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center text-slate-800 dark:text-white">
                            <span className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-4">
                                <i className="fa-solid fa-graduation-cap text-purple-600 dark:text-purple-400"></i>
                            </span>
                            Education
                        </h3>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.4rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
                            {educations.map((edu, index) => (
                                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 dark:border-slate-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110 ${getColorClasses(edu.color).iconBg} ${getColorClasses(edu.color).iconText}`}>
                                        <i className="fa-solid fa-circle text-[8px]"></i>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${getColorClasses(edu.color).badgeBg} ${getColorClasses(edu.color).badgeText}`}>
                                            {edu.period}
                                        </span>
                                        <h5 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-1">{edu.degree}</h5>
                                        <p className="font-medium text-slate-600 dark:text-slate-400 mb-2">{edu.institution}</p>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">{edu.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Journey;
