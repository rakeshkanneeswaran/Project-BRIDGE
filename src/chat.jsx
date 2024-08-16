import { useState, useRef } from "react";
import axios from "axios";
import Appbar from "../components/Appbar"; // Adjust the import path as needed
import ModelSelectModal from "../components/modalselect"; // Adjust the import path as needed
import "./App.css";
import UserIcon from "../public/userpic.svg"; // Import User Icon
import AIImage from "../public/rakesh.jpeg"; // Import AI Image

function Chat() {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [selectedModel, setSelectedModel] = useState("llava");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:11434/api/generate", {
        model: selectedModel,
        prompt: question,
        stream: false,
      });
      const newAnswer = response.data.response;
      const timestamp = new Date().toLocaleTimeString(); // Add timestamp
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { text: question, timestamp, type: "question" }, // Add question to answers
        { text: newAnswer, timestamp, type: "answer" }, // Add answer to answers
      ]);
      setQuestion("");
      inputRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.error("Error fetching response:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-gray-200">
      <Appbar
        openModelModal={() => setIsModalOpen(true)}
        selectedModel={selectedModel}
      />
      <div className="flex-grow p-4 overflow-y-auto bg-gray-800 shadow-lg rounded-lg">
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`p-4 mb-2 rounded-lg shadow-md transition-colors duration-300 ${
              answer.type === "question"
                ? "bg-black hover:bg-gray-600"
                : "bg-black hover:bg-gray-600"
            }`}
          >
            <div className="flex items-start space-x-2">
              {answer.type === "question" && (
                <img src={UserIcon} alt="User Icon" className="w-6 h-6" />
              )}
              {answer.type === "answer" && (
                <a
                  href="https://www.linkedin.com/in/rakeshkanneeswaran/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={AIImage}
                    alt="AI Icon"
                    className="w-6 h-6 cursor-pointer"
                  />
                </a>
              )}
              <div>
                {answer.text}
                <div className="text-gray-400 text-sm mt-2">
                  {answer.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div ref={inputRef}></div>
      </div>

      <div className="bg-gray-900 p-4 flex items-center space-x-3 justify-between">
        <form
          onSubmit={handleSubmit}
          className="flex-grow flex items-center space-x-3"
        >
          <input
            className="flex-1 border border-gray-600 rounded-lg px-4 py-2 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg px-4 py-2 hover:from-teal-600 hover:to-cyan-700 transition-transform transform ${
              isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } ${!isLoading && "hover:scale-105"}`}
          >
            {isLoading ? "Processing..." : "Ask"}
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-lg px-4 py-2 hover:from-teal-600 hover:to-cyan-700 transition-transform transform ${
              isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            } ${!isLoading && "hover:scale-105"}`}
          >
            {"file"}
          </button>
        </form>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-700 transition-colors duration-300"
        >
          {selectedModel}
        </button>
      </div>

      <ModelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedModel={selectedModel}
        handleModelChange={handleModelChange}
      />
    </div>
  );
}

export default Chat;