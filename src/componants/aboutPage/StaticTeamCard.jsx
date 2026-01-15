// src/components/static/StaticTeamCard.jsx
import React from 'react';

const StaticTeamCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-50">
      <h4 className="text-xl font-bold text-slate-800 mb-4">Expert Team</h4>
      <div className="flex items-center gap-4">
        {/* Team Avatars */}
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 border-2 border-white flex items-center justify-center text-white font-bold text-sm"
            >
              T{i}
            </div>
          ))}
        </div>
        <div>
          <div className="font-semibold text-slate-800">50+ Certified Experts</div>
          <div className="text-sm text-slate-600">Specialized in cutting-edge technologies</div>
        </div>
      </div>
    </div>
  );
};

export default StaticTeamCard;