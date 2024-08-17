import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./ModelSelectModal.css"; // Add styles in this file

export default function ModelSelectModal({ isOpen, onClose, selectedModel, handleModelChange }) {
  const [description, setDescription] = useState("");

  const modelOptions = [
    { name: "llama", description: "LLaMA: A large language model for NLP tasks like text generation and translation." },
    { name: "llama2", description: "LLaMA2: An improved version of LLaMA with better accuracy for text-based tasks." },
    { name: "llama3.1", description: "LLaMA3.1: The latest iteration with optimized performance and accuracy." },
    { name: "mistral", description: "Mistral: A fast and efficient model for text-based tasks." },
    { name: "llava", description: "LLava: A vision-language model for image captioning and visual question answering." }
  ];

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="text-2xl font-bold mb-4">Select Model</h2>
        <ul className="model-list">
          {modelOptions.map((model, index) => (
            <li
              key={index}
              className={`model-option ${selectedModel === model.name ? "selected" : ""}`}
              onClick={() => {
                handleModelChange(model.name);
                setDescription(model.description); // Set description when model is selected
              }}
            >
              {model.name}
            </li>
          ))}
        </ul>
        {description && <p className="model-description mt-4">{description}</p>} {/* Display description */}
        <button className="modal-close mt-4" onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
