// import React, { useState } from 'react';
// import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [activeDropdown, setActiveDropdown] = useState(null);

//     const servicesDropdown = [
//         { name: 'Web Development', href: '/services/web' },
//         { name: 'App Development', href: '/services/app' },
//         { name: 'Digital Marketing', href: '/services/dg' },
//         { name: 'Cloud Services', href: '/services/cloud' },
//         { name: 'Testing (Manual & Auto)', href: '/services/testing' },
//          { name: 'Full Stack (Manage All)', href: '/services/fullstack' },
//     ];

//     return (
//         <nav className="bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f] border-b border-blue-900/30 relative z-50">
//             {/* Premium Background Effects */}
//             <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute -top-40 -right-20 w-80 h-80 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
//                 <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-r from-blue-900/10 to-indigo-800/10 rounded-full blur-3xl" />
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
//                         <div className="flex-shrink-0 cursor-pointer"
//                          onClick={() => navigate("/")}>
//                             <img
//                                 src="/logo.png"
//                                 alt="triocore Logo"
//                                 className="h-30 w-60 mt-8 object-contain"
//                             />
//                             <div className="hidden" id="logo-fallback">
//                                 <span className="text-2xl font-bold text-gray-800">triocore</span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Desktop Navigation Links */}
//                     <div className="hidden lg:flex items-center space-x-8">
//                         <a
//                             href="#"
//                             className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
//                              onClick={() => navigate("/")}
//                         >
//                             Home
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
//                         </a>

//                         {/* ✅ FIXED: Services Dropdown */}
//                         <div
//                             className="relative"
//                             onMouseEnter={() => setActiveDropdown('services')}
//                             onMouseLeave={() => setActiveDropdown(null)}
//                         >
//                             <button className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center space-x-2 py-2">
//                                 <span>Services</span>
//                                 <FaChevronDown 
//                                     className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
//                                     size={12} 
//                                 />
//                             </button>

//                             {/* ✅ FIXED: Dropdown Menu with bridge element */}
//                             <div 
//                                 className={`absolute top-full left-0 pt-2 transition-all duration-300 transform origin-top z-50 ${
//                                     activeDropdown === 'services' 
//                                         ? 'opacity-100 scale-100 visible' 
//                                         : 'opacity-0 scale-95 invisible'
//                                 }`}
//                             >
//                                 {/* Invisible bridge to prevent gap issue */}
//                                 <div className="absolute -top-2 left-0 right-0 h-2"></div>
                                
//                                 <div className="w-64 bg-[#0a0a0f] backdrop-blur-lg rounded-xl shadow-2xl shadow-blue-900/30 border border-blue-900/50">
//                                     <div className="p-2">
//                                         {servicesDropdown.map((service, index) => (
//                                             <a
//                                                 key={index}
//                                                 href={service.href}
//                                                 className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 group/item"
//                                             >
//                                                 <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/item:scale-125 transition-transform"></div>
//                                                 <span>{service.name}</span>
//                                                 <FaChevronDown 
//                                                     className="ml-auto transform -rotate-90 opacity-0 group-hover/item:opacity-100 transition-all" 
//                                                     size={10} 
//                                                 />
//                                             </a>
//                                         ))}
//                                     </div>
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
//                              onClick={() => navigate("/process")}
//                         >
//                             Process
//                             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
//                         </a>
//                         <a
//                             href="#contact"
//                             className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative"
//                              onClick={() => navigate("/contact")}
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
//                              onClick={() => navigate("/contact")}
//                         >
//                            Contact
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

//             {/* Mobile Menu - unchanged */}
//             <div className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/95 backdrop-blur-lg border-t border-blue-900/30 shadow-2xl transition-all duration-300 z-50 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
//                 {/* ... mobile menu content unchanged ... */}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const servicesDropdown = [
        { name: 'Web Development', href: '/services/web' },
        { name: 'App Development', href: '/services/app' },
        { name: 'Digital Marketing', href: '/services/dg' },
        { name: 'Cloud Services', href: '/services/cloud' },
        { name: 'Testing (Manual & Auto)', href: '/services/testing' },
        { name: 'Full Stack (Manage All)', href: '/services/fullstack' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
        setIsMobileMenuOpen(false);
        setMobileServicesOpen(false);
    };

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
                <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3">
                        <div 
                            className="flex-shrink-0 cursor-pointer"
                            onClick={() => handleNavigation("/")}
                        >
                            <img
                                src="/logo.png"
                                alt="triocore Logo"
                                className="h-32 w-32 sm:h-16 sm:w-40 md:h-20 md:w-48 lg:h-44 lg:w-44 mt-4 sm:mt-6 md:mt-8 object-contain"
                            />
                            <div className="hidden" id="logo-fallback">
                                <span className="text-xl sm:text-2xl font-bold text-gray-800">triocore</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <a
                            href="#"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative text-sm xl:text-base"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation("/");
                            }}
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('services')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button className="text-gray-300 hover:text-white font-medium transition-all duration-300 flex items-center space-x-2 py-2 text-sm xl:text-base">
                                <span>Services</span>
                                <FaChevronDown 
                                    className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                                    size={12} 
                                />
                            </button>

                            {/* Dropdown Menu with bridge element */}
                            <div 
                                className={`absolute top-full left-0 pt-2 transition-all duration-300 transform origin-top z-50 ${
                                    activeDropdown === 'services' 
                                        ? 'opacity-100 scale-100 visible' 
                                        : 'opacity-0 scale-95 invisible'
                                }`}
                            >
                                {/* Invisible bridge to prevent gap issue */}
                                <div className="absolute -top-2 left-0 right-0 h-2"></div>
                                
                                <div className="w-56 xl:w-64 bg-[#0a0a0f] backdrop-blur-lg rounded-xl shadow-2xl shadow-blue-900/30 border border-blue-900/50">
                                    <div className="p-2">
                                        {servicesDropdown.map((service, index) => (
                                            <a
                                                key={index}
                                                href={service.href}
                                                className="flex items-center px-3 xl:px-4 py-2.5 xl:py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 group/item text-sm"
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
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative text-sm xl:text-base"
                             onClick={() => navigate("/portfolio")}
                        >
                            Portfolio
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#process"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative text-sm xl:text-base"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation("/process");
                            }}
                        >
                            Process
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:text-white font-medium transition-all duration-300 hover:scale-105 group relative text-sm xl:text-base"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigation("/contact");
                            }}
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
                        {/* Contact Button - Hidden on small screens, visible on md and up */}
                        <button
                            className="hidden sm:block p-2 sm:p-2.5 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold text-sm sm:text-base px-4 sm:px-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30"
                            aria-label="Get Quote"
                            onClick={() => handleNavigation("/contact")}
                        >
                            Contact
                        </button>
                        
                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-200 p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`lg:hidden absolute top-full left-0 right-0 bg-[#0a0a0f]/98 backdrop-blur-lg border-t border-blue-900/30 shadow-2xl transition-all duration-300 z-50 ${
                    isMobileMenuOpen 
                        ? 'opacity-100 translate-y-0 max-h-[calc(100vh-4rem)] overflow-y-auto' 
                        : 'opacity-0 -translate-y-4 pointer-events-none max-h-0 overflow-hidden'
                }`}
            >
                <div className="px-4 py-4 space-y-2">
                    {/* Home */}
                    <a
                        href="#"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/");
                        }}
                    >
                        Home
                    </a>

                    {/* Services with Dropdown */}
                    <div className="rounded-lg overflow-hidden">
                        <button
                            className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        >
                            <span>Services</span>
                            <FaChevronDown 
                                className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                                size={14} 
                            />
                        </button>
                        
                        {/* Mobile Services Dropdown */}
                        <div 
                            className={`transition-all duration-300 overflow-hidden ${
                                mobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="pl-4 py-2 space-y-1">
                                {servicesDropdown.map((service, index) => (
                                    <a
                                        key={index}
                                        href={service.href}
                                        className="flex items-center px-4 py-2.5 text-gray-400 hover:text-white hover:bg-blue-900/20 rounded-lg transition-all duration-200 text-sm"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                                        <span>{service.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Portfolio */}
                    <a
                        href="#portfolio"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Portfolio
                    </a>

                    {/* Process */}
                    <a
                        href="#process"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/process");
                        }}
                    >
                        Process
                    </a>

                    {/* Contact */}
                    <a
                        href="#contact"
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-900/30 rounded-lg transition-all duration-200 font-medium"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/contact");
                        }}
                    >
                        Contact
                    </a>

                    {/* Mobile Contact Button - Only visible on xs screens */}
                    <div className="pt-4 sm:hidden">
                        <button
                            className="w-full p-3 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30"
                            onClick={() => handleNavigation("/contact")}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;