import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from 'framer-motion';
import LogoDark from '../assets/logos/logo_dark.png';
import LogoLight from '../assets/logos/logo_light.png';
import useScroll from "../hooks/useScroll";
import { navItems } from "../config";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const scrolled = useScroll(50);

    return (
        <motion.header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <nav className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center space-x-2"
                    >
                        <img src={LogoLight} alt="Logo" className="h-12 w-auto" />
                        <span className="text-2xl font-heading text-white">TRC</span>
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-gray-100 transition-colors font-mono"
                            >
                                {item.name}
                            </motion.a>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-gray-300"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isOpen && (
                    <motion.div
                        className="md:hidden mt-4 pb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-2 text-gray-300 hover:text-gray-100 font-mono transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </nav>
        </motion.header>
    )



}

export default Header;