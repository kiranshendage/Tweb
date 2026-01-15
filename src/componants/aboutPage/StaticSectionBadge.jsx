// src/components/static/StaticSectionBadge.jsx
import React from 'react';

const StaticSectionBadge = ({ text = "About Triocore Technology" }) => {
  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full py-2.5 px-5 shadow-sm mb-8">
      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></span>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
};

export default StaticSectionBadge;