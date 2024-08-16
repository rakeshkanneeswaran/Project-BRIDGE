import React from "react";

export default function Appbar({ selectedModel }) {
  return (
    <div className="flex items-center justify-center p-4 bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-xl">
      <span className="text-6xl font-mono font-bold  tracking-widest text-shadow-md">
        BRIDGE an Interface for LLMS
      </span>
     
    </div>
  );
}
