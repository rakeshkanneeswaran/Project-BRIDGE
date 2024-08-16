import React from "react";
import ReactDOM from "react-dom";
import "./ModelSelectModal.css"; // Add styles in this file

export default function ModelSelectModal({ isOpen, onClose, selectedModel, handleModelChange }) {
  if (!isOpen) return null;

  const modelOptions = ["llama", "llama2", "mistral", "llava", "llama3.1"];

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Select Model</h2>
        <ul className="model-list">
          {modelOptions.map((model, index) => (
            <li
              key={index}
              className={`model-option ${selectedModel === model ? "selected" : ""}`}
              onClick={() => {
                handleModelChange(model);
                onClose();
              }}
            >
              {model}
            </li>
          ))}
        </ul>
        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
