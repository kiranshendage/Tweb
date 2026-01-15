// src/components/static/StaticStats.jsx
import React from 'react';
import { FaRocket, FaUsers, FaProjectDiagram, FaShieldAlt } from 'react-icons/fa';

const StaticStats = () => {
  const stats = [
    { 
      icon: FaRocket, 
      value: "8+", 
      label: "Years in Business",
      gradient: "from-blue-500 to-cyan-400"
    },
    { 
      icon: FaUsers, 
      value: "240+", 
      label: "Happy Clients",
      gradient: "from-indigo-500 to-blue-400"
    },
    { 
      icon: FaProjectDiagram, 
      value: "380+", 
      label: "Projects Delivered",
      gradient: "from-cyan-500 to-blue-400"
    },
    { 
      icon: FaShieldAlt, 
      value: "99.9%", 
      label: "Uptime Guarantee",
      gradient: "from-emerald-500 to-teal-400"
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50"
          >
            <div className="flex items-center gap-4">
              <div className={`p-4 bg-gradient-to-br ${stat.gradient} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StaticStats;