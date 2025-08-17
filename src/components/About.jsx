import React from 'react'
import { motion } from 'framer-motion';
import { Target, Lightbulb, Trophy, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const values = [
        {
            icon: <Target className='h-8 w-8' />,
            title: "Innovation",
            description: "We push the boundaries of what's possible in robotics and automation."
        },
        {
            icon: <Lightbulb className='h-8 w-8' />,
            title: "Learning",
            description: "Continuous skill development and knowledge sharing among members."
        },
        {
            icon: <Trophy className="h-8 w-8" />,
            title: "Excellence",
            description: "Striving for outstanding results in competitions and projects."
        },
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Impact",
            description: "Creating solutions that make a positive difference in the world."
        }
    ];


    return (
        <section id='about' className='py-20 bg-gray-50'>
            <div className='container mx-auto px-4'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">
                        About Our Club
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-mono">
                        Founded in 2018, The Robotics Club has been at the forefront of technological
                        innovation at our college. We're a community of passionate engineers,
                        programmers, and innovators dedicated to exploring the exciting world of robotics.
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 mx-24'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-3xl font-heading text-gray-900 mb-6">Our Mission</h3>
                        <p className="text-lg font-mono text-gray-600 mb-6">
                            To foster innovation, creativity, and technical excellence in robotics and
                            automation while providing hands-on learning experiences that prepare
                            students for the future of technology.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-800 rounded-full mr-3"></div>
                                <span className="text-gray-700 font-mono">Advanced robotics research and development</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-800 rounded-full mr-3"></div>
                                <span className="text-gray-700 font-mono">Competitive robotics participation</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-gray-800 rounded-full mr-3"></div>
                                <span className="text-gray-700 font-mono">Community outreach and education</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Placeholder for main club image */}
                        <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
                            <p className="text-gray-600 text-center">
                                Replace this with your main club photo<br />
                                (Workshop, team photo, or lab image)
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-24"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            className="text-center p-6 bg-white rounded-lg shadow-lg"
                        >
                            <div className="text-gray-800 mb-4 flex justify-center">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 font-mono">
                                {value.title}
                            </h4>
                            <p className="text-gray-600 text-sm font-mono">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
