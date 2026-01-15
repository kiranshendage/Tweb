// import React, { useState } from 'react';
// import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const servicesDropdown = [
//         { name: 'Web Development', href: '#web-dev' },
//         { name: 'App Development', href: '#app-dev' },
//         { name: 'Digital Marketing', href: '#digital-marketing' },
//         { name: 'Cloud Services', href: '#cloud' },
//         { name: 'Testing (Manual & Auto)', href: '#testing' },
//     ];

//     return (
//         <nav className="bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] border-b border-blue-900/30 relative overflow-hidden">
//             {/* Premium Background Effects */}
//             <div className="absolute inset-0 overflow-hidden">
//                 {/* Animated gradient orbs */}
//                 <div className="absolute -top-40 -right-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-r from-blue-900/10 to-indigo-800/10 rounded-full blur-3xl" />

//                 {/* Subtle grid overlay */}
//                 <div
//                     className="absolute inset-0 opacity-[0.03]"
//                     style={{
//                         backgroundImage: `linear-gradient(to right, #0066ff 1px, transparent 1px),
//                                         linear-gradient(to bottom, #0066ff 1px, transparent 1px)`,
//                         backgroundSize: '40px 40px',
//                     }}
//                 />
//             </div>

//             <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-20">
//                     {/* Logo Section */}
//                     <div className="flex items-center space-x-3">
//                         <div className="flex-shrink-0">
//                             {/* If you have a logo.png in your public folder */}
//                             <img
//                                 src="/logo.png"
//                                 alt="Fibonce Logo"
//                                 className="h-30 w-60 mt-8 object-contain" // Fixed dimensions

//                             />

//                             {/* Text fallback that appears only if image doesn't load */}
//                             <div className="hidden" id="logo-fallback">
//                                 <span className="text-2xl font-bold text-gray-800">Fibonce</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <div className="hidden lg:flex items-center space-x-8">
//                         <a
//                             href="#"
//                             className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
//                         >
//                             Home
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
//                         </a>

//                         {/* Services Dropdown */}
//                         <div
//                             className="relative group"
//                             onMouseEnter={() => setActiveDropdown('services')}
//                             onMouseLeave={() => setActiveDropdown(null)}
//                         >
//                             <button className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center space-x-2 group">
//                                 <span>Services</span>
//                                 <FaChevronDown className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} size={12} />
//                             </button>

//                             {/* Dropdown Menu */}
//                             <div className={`absolute top-full left-0 mt-2 w-64 bg-[#0a0a0f]/95 backdrop-blur-lg rounded-xl shadow-2xl shadow-blue-900/30 border border-blue-900/50 transition-all duration-300 transform origin-top ${activeDropdown === 'services' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
//                                 <div className="p-2">
//                                     {servicesDropdown.map((service, index) => (
//                                         <a
//                                             key={index}
//                                             href={service.href}
//                                             className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 group/item"
//                                         >
//                                             <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
//                                             <span>{service.name}</span>
//                                             <FaChevronDown className="ml-auto transform -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all" size={10} />
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         <a
//                             href="#portfolio"
//                             className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
//                         >
//                             Portfolio
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
//                         </a>
//                         <a
//                             href="#process"
//                             className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
//                         >
//                             Process
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
//                         </a>
//                         <a
//                             href="#contact"
//                             className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
//                         >
//                             Contact
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
//                         </a>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex items-center space-x-6">
//                         <button
//                             className="p-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
//                             aria-label="Get Quote"
//                         >
//                             Get Quote
//                         </button>
//                         <button
//                             className="lg:hidden text-gray-400 hover:text-white transition-colors duration-200"
//                             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                             aria-label="Toggle menu"
//                         >
//                             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-blue-900/30 shadow-2xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
//                 <div className="px-4 py-6 space-y-4">
//                     <a
//                         href="#"
//                         className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         Home
//                     </a>
//                     <div className="border-l-2 border-blue-900/50 pl-4">
//                         <h3 className="text-sm font-semibold text-blue-400 mb-2">Services</h3>
//                         {servicesDropdown.map((service, index) => (
//                             <a
//                                 key={index}
//                                 href={service.href}
//                                 className="block px-4 py-2.5 text-gray-400 hover:text-white hover:bg-blue-900/20 rounded-lg transition-all duration-200 ml-2"
//                                 onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                                 • {service.name}
//                             </a>
//                         ))}
//                     </div>
//                     <a
//                         href="#portfolio"
//                         className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         Portfolio
//                     </a>
//                     <a
//                         href="#process"
//                         className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         Process
//                     </a>
//                     <a
//                         href="#contact"
//                         className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         Contact
//                     </a>

//                     {/* Mobile CTA */}
//                     <button
//                         className="w-full mt-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                         Start Your Project
//                     </button>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const servicesDropdown = [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'App Development', href: '#app-dev' },
        { name: 'Digital Marketing', href: '#digital-marketing' },
        { name: 'Cloud Services', href: '#cloud' },
        { name: 'Testing (Manual & Auto)', href: '#testing' },
    ];

    return (
        <nav className="bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] border-b border-blue-900/30 relative z-50">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-r from-blue-900/10 to-indigo-800/10 rounded-full blur-3xl" />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(to right, #0066ff 1px, transparent 1px),
                                        linear-gradient(to bottom, #0066ff 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                            <img
                                src="/logo.png"
                                alt="Fibonce Logo"
                                className="h-30 w-60 mt-8 object-contain"
                            />
                            <div className="hidden" id="logo-fallback">
                                <span className="text-2xl font-bold text-gray-800">Fibonce</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>

                        {/* ✅ FIXED: Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center space-x-2 py-2">
                                <span>Services</span>
                                <FaChevronDown 
                                    className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                                    size={12} 
                                />
                            </button>

                            {/* ✅ FIXED: Dropdown Menu with bridge element */}
                            <div 
                                className={`absolute top-full left-0 pt-2 transition-all duration-300 transform origin-top z-50 ${
                                    activeDropdown === 'services' 
                                        ? 'opacity-100 scale-100 visible' 
                                        : 'opacity-0 scale-95 invisible'
                                }`}
                            >
                                {/* Invisible bridge to prevent gap issue */}
                                <div className="absolute -top-2 left-0 right-0 h-2"></div>
                                
                                <div className="w-64 bg-[#0a0a0f] backdrop-blur-lg rounded-xl shadow-2xl shadow-blue-900/30 border border-blue-900/50">
                                    <div className="p-2">
                                        {servicesDropdown.map((service, index) => (
                                            <a
                                                key={index}
                                                href={service.href}
                                                className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 group/item"
                                            >
                                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
                                                <span>{service.name}</span>
                                                <FaChevronDown 
                                                    className="ml-auto transform -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all" 
                                                    size={10} 
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a
                            href="#portfolio"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
                        >
                            Portfolio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#process"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
                        >
                            Process
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-6">
                        <button
                            className="p-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
                            aria-label="Get Quote"
                        >
                            Get Quote
                        </button>
                        <button
                            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - unchanged */}
            <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-blue-900/30 shadow-2xl transition-all duration-300 z-50 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                {/* ... mobile menu content unchanged ... */}
            </div>
        </nav>
    );
};

export default Navbar;