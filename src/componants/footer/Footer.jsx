// import React from 'react';
// import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     return (
//         <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50">
//             <div className="container mx-auto px-4 py-12 md:py-16">
//                 {/* Main Footer Content */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//                     {/* Logo and Description */}
//                     <div className="space-y-6">
//                         <div className="flex items-center space-x-3">

//                             <div>
//                                 <img 
//                                     src="/logo.png" 
//                                     alt="Logo" 
//                                     className="h-50 w-auto"
                                    
//                                 />
//                             </div>
//                         </div>
//                         <p className="text-gray-600 leading-relaxed">
//                             Transforming businesses with cutting-edge digital solutions and innovative technology.
//                         </p>
//                         <div className="flex space-x-4">
//                             <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300">
//                                 <Facebook className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300">
//                                 <Twitter className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300">
//                                 <Linkedin className="w-5 h-5" />
//                             </a>
//                             <a href="#" className="w-10 h-10 bg-gray-100 hover:bg-pink-100 rounded-lg flex items-center justify-center text-gray-600 hover:text-pink-600 transition-all duration-300">
//                                 <Instagram className="w-5 h-5" />
//                             </a>
//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Links</h3>
//                         <ul className="space-y-4">
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
//                                     Home
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
//                                     About Us
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
//                                     Services
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300" />
//                                     Contact
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h3 className="text-lg font-bold text-gray-900 mb-6">Our Services</h3>
//                         <ul className="space-y-4">
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     Web Development
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     Mobile Apps
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     Cloud Solutions
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group">
//                                     <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                                     Digital Marketing
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Info */}
//                     <div>
//                         <h3 className="text-lg font-bold text-gray-900 mb-6">Get in Touch</h3>
//                         <div className="space-y-4">
//                             <div className="flex items-start space-x-3">
//                                 <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
//                                 <div>
//                                     <p className="text-gray-600">contact@fiborea.com</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-3">
//                                 <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
//                                 <div>
//                                     <p className="text-gray-600">+91 98765 43210</p>
//                                 </div>
//                             </div>
//                             <div className="flex items-start space-x-3">
//                                 <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
//                                 <div>
//                                     <p className="text-gray-600">Pune, India</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Newsletter Subscription */}
                
//             </div>
//         </footer>
//     );
// };

// export default Footer;


import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Send, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Portfolio', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    const services = [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'Cloud Solutions', href: '#' },
        { name: 'Digital Marketing', href: '#' },
        { name: 'UI/UX Design', href: '#' },
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook', hoverColor: 'hover:bg-blue-500 hover:text-white' },
        { icon: Twitter, href: '#', label: 'Twitter', hoverColor: 'hover:bg-sky-500 hover:text-white' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', hoverColor: 'hover:bg-blue-700 hover:text-white' },
        { icon: Instagram, href: '#', label: 'Instagram', hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white' },
    ];

    return (
        <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                <div 
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #60a5fa 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            {/* Newsletter Section */}
            {/* <div className="relative z-10 border-b border-slate-700/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-2xl lg:rounded-3xl p-8 lg:p-12 relative overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                        </div>
                        
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                                    Subscribe to Our Newsletter
                                </h3>
                                <p className="text-blue-100 text-sm lg:text-base max-w-md">
                                    Stay updated with the latest tech trends, insights, and exclusive offers.
                                </p>
                            </div>
                            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full sm:w-72 lg:w-80 pl-12 pr-4 py-4 rounded-xl bg-white/95 backdrop-blur-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                                    />
                                </div>
                                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/30 group">
                                    Subscribe
                                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Main Footer Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1 space-y-6">
                       <div className="flex-shrink-0">
                            {/* If you have a logo.png in your public folder */}
                            <img
                                src="/logo.png"
                                alt="Fibonce Logo"
                                className="h-30 w-60 mt-8 object-contain" // Fixed dimensions

                            />

                            {/* Text fallback that appears only if image doesn't load */}
                            <div className="hidden" id="logo-fallback">
                                <span className="text-2xl font-bold text-gray-800">Fibonce</span>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-300 ${social.hoverColor} hover:scale-110`}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-slate-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 -translate-x-2 transition-all duration-300 text-blue-400" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {link.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Our Services
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a 
                                        href={service.href} 
                                        className="text-slate-400 hover:text-blue-400 transition-all duration-300 flex items-center group"
                                    >
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                                            {service.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 relative inline-block">
                            Get in Touch
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
                        </h3>
                        <div className="space-y-4">
                            <a 
                                href="mailto:contact@triocore.com" 
                                className="flex items-start space-x-3 group cursor-pointer"
                            >
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email Us</p>
                                    <p className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300">
                                        contact@triocore.com
                                    </p>
                                </div>
                            </a>
                            
                            <a 
                                href="tel:+919876543210" 
                                className="flex items-start space-x-3 group cursor-pointer"
                            >
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Call Us</p>
                                    <p className="text-slate-300 group-hover:text-blue-400 transition-colors duration-300">
                                        +91 98765 43210
                                    </p>
                                </div>
                            </a>
                            
                            <div className="flex items-start space-x-3 group">
                                <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Visit Us</p>
                                    <p className="text-slate-300">
                                        Pune, Maharashtra<br />
                                        India - 411001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-slate-700/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center text-slate-400 text-sm">
                            <span>© {currentYear} Triocore Technology. Made with</span>
                            <Heart className="w-4 h-4 mx-1.5 text-red-500 fill-red-500" />
                            <span>in India</span>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                Privacy Policy
                            </a>
                            <span className="text-slate-700">|</span>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                Terms of Service
                            </a>
                            <span className="text-slate-700">|</span>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;