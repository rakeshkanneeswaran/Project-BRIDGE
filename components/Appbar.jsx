import React from "react";
import AIImage from "../public/logo.svg"; // Import AI Image

export default function Appbar() {
  return (
    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-xl">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img src={AIImage} alt="Logo" className="w-12 h-12 rounded-full" />

        {/* Title and Subtitle */}
        <div>
          <span className="text-3xl font-mono font-bold tracking-widest text-shadow-md">
            BRIDGE
          </span>
          <div className="text-sm">The Interface for Large Language Models</div>
        </div>
      </div>
    </div>
  );
}
