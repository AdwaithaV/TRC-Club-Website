import React from 'react';
import { ChevronDown, Cpu, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section id='home' className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center relative overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute w-2 h-2 bg-white rounded-full opacity-30'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className='container mx-auto px-4 text-center relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className='text-5xl md:text-7xl font-heading text-white mb-6'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        The <span className='text-white'>Robotics</span> Club
                    </motion.h1>

                    <motion.p
                        className='text-xl md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-mono'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Innovating the future through cutting-edge robotics, AI, and automation.
                        Join us on our journey to revolutionize technology.
                    </motion.p>

                    <motion.div
                        className='flex flex-col sm:flex-row gap-4 justify-center mb-12'
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.button
                            className="bg-white hover:bg-transparent text-black border-2 border-transparent hover:text-white hover:border-2 hover:border-white px-8 py-3 rounded-3xl font-semibold transition-colors font-mono cursor-pointer"
                            onClick={() => scrollToSection('projects')}
                        >
                            View Our Projects
                        </motion.button>

                        <motion.button
                            className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-semibold transition-all font-mono cursor-pointer"
                            onClick={() => scrollToSection('team')}
                        >
                            Meet the Team
                        </motion.button>
                    </motion.div>

                    <motion.div
                        className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-6'
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white">50+</h3>
                            <p className="text-gray-300">Projects Completed</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white">200+</h3>
                            <p className="text-gray-300">Active Members</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white">15+</h3>
                            <p className="text-gray-300">Awards Won</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
