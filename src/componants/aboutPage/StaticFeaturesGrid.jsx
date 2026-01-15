// src/components/static/StaticFeaturesGrid.jsx
import React from 'react';
import { FaShieldAlt, FaCloud, FaCode, FaRocket } from 'react-icons/fa';

const StaticFeaturesGrid = () => {
  const features = [
    { icon: FaShieldAlt, title: "Cybersecurity", desc: "Enterprise-grade protection" },
    { icon: FaCloud, title: "Cloud Infrastructure", desc: "Scalable solutions" },
    { icon: FaCode, title: "Product Engineering", desc: "Custom development" },
    { icon: FaRocket, title: "Innovation", desc: "Future-ready tech" },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-blue-50 hover:shadow-md transition-all duration-300">
          <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
            <feature.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-1">{feature.title}</h4>
            <p className="text-slate-600 text-sm">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StaticFeaturesGrid;