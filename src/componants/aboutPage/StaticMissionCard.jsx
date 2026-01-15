// src/components/static/StaticMissionCard.jsx
import React from 'react';

const StaticMissionCard = () => {
  const techTags = ["AI/ML", "Cloud", "Security", "IoT", "Blockchain", "DevOps"];

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-2xl p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
        <p className="text-blue-100 leading-relaxed mb-6">
          To empower businesses with innovative technology solutions that drive growth, 
          enhance security, and create sustainable competitive advantages in the digital era.
        </p>
        
        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {techTags.map((tech, idx) => (
            <span key={idx} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticMissionCard;