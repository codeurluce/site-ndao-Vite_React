import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLiturgical } from '../../contexts/LiturgicalContext';
import classNames from 'classnames';

/**
 * Navbar – Barre de navigation principale du site
 * 
 * - Affiche le nom de l'église, les liens de navigation et un champ de recherche.
 * - Le style change selon la saison liturgique (via contexte).
 * - Affichage responsive : menu burger sur mobile.
 * - Comportement dynamique :
 *    - La couleur change au scroll
 *    - Le menu mobile se ferme au changement de page
 *    - Barre de recherche animée avec Framer Motion
 */

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { currentColor, theme } = useLiturgical();
    const searchRef = useRef(null); // Référence pour la zone de recherche


    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        }

        if (isSearchOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isSearchOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when changing routes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const getNavbarColors = () => {
        return isScrolled ? 'bg-gray-900 text-white img-white shadow-md' : 'bg-transparent';
        
    };
    

    const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarColors()} ${isScrolled ? 'py-2' : 'py-2'
        }`;

    const navItems = [
        { name: 'Accueil', path: '/', highlight: true },
        { name: 'Entités et CEB', path: '/groupes' },
        { name: 'Demande de messes', path: '/demande-messe' },
        { name: 'Faire un don', path: '/don' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchQuery);
        setIsSearchOpen(false);
        setSearchQuery('');
    };

    return (
        <nav className={navbarClasses}>
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex inline-grid">
                            
                            {/* Gerer archidiocese et le doyenné */}
                        <div className={`flex flex-col items-start mb-2 ml-4 lg:ml-2
                                        overflow-hidden transition-all duration-500 ease-in-out
                                        ${isScrolled ? 'max-h-0' : 'max-h-20'}
                                        `}>

                            {/* Archidiocèse */}
                            <div className="flex items-center mb-1">
                                <img src="../../public/icons/archidioceseLogo1.png" alt="icon" className="w-4 mr-4 lg:mr-6" />
                                <span className={`font-serif font-normal text-xs`}>
                                    Archidiocèse de Dakar
                                </span>
                            </div>

                            {/* Doyennée */}
                            <div className="flex items-center">
                                <img src="../../public/icons/localisation1.png" alt="icon" className="w-4 mr-4 lg:mr-6" />
                                <span className={`font-serif font-normal text-xs`}>
                                    Doyennée Grand Dakar/Yoff
                                </span>
                            </div>
                        </div>
{/* Logo et nom de l'Eglise */}
                        <Link to="/" className="flex items-center leading-none">
                            <img src="../../public/icons/eglise.png" alt="icon" className={`w-8 mr-4 ${isScrolled ? 'brightness-0 invert' : ''}`}/>
                            <span className={`font-serif font-bold text-xs xs:text-xl block`}>
                                Notre Dame des Anges <br />
                                <span className="font-serif font-normal text-xs block">
                                    Ouakam
                                </span>
                            </span>

                        </Link>

                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {/* Search Bar */}
                        <button
                            className={`p-2 text-gray-600 hover:text-liturgical-${theme.ringColor}-600 transition-colors`}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={20} />
                        </button>

                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={classNames(
                                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300",
                                    location.pathname === item.path
                                        ? classNames(theme.bgColor, "text-gray-900")
                                        : isScrolled
                                            ? "text-gray-700 hover:text-gray-900 hover:bg-gray-500"
                                            : "text-gray-700 hover:text-gray-500 hover:bg-gray-900"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex lg:hidden items-center space-x-2">
                        <button
                            className={`p-2 text-gray-600 hover:text-liturgical-red-600 transition-colors`}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={20} />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md text-gray-600 hover:text-liturgical-${currentColor}-600 focus:outline-none`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-gray-900 shadow-md"
                    >
                        <div className="container mx-auto px-4 py-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={classNames(
                                        "block px-3 py-2 rounded-md text-base font-medium",
                                        location.pathname === item.path
                                            ? classNames(theme.bgColor, "text-white")
                                            : "text-gray-700 hover:bg-gray-100"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        ref={searchRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-gray-900 shadow-md p-4"
                    >
                        <form onSubmit={handleSearch} className="flex items-center">
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className={`flex-grow p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 ${theme.ringColor} focus:border-transparent`}

                            />
                            <button
                                type="submit"
                                className={`bg-liturgical-${currentColor}-600 text-white p-2 rounded-r-md hover:bg-liturgical-${currentColor}-700 transition-colors`}
                            >
                                <Search size={20} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
