Bridge
**Bridge** is a **Cross-Platform Application** designed to enable seamless interaction with **open-source Vision Models** and **Large Language Models (LLMs)**. The application is built with performance and efficiency in mind, leveraging the power of Rust to deliver a robust interface for advanced AI and image analysis.

<img width="1512" alt="Screenshot 2024-08-17 at 2 48 13 PM" src="https://github.com/user-attachments/assets/5cba4aa0-b275-4f36-bc54-1d568a7579f1">
<img width="1512" alt="Screenshot 2024-08-17 at 2 48 23 PM" src="https://github.com/user-attachments/assets/8f99ba2c-5864-4868-bcae-d07e5760b1fb">

## Features

- **Model Integration**: Supports various open-source Vision and Large Language Models that can be easily downloaded using [Ollama](https://ollama.com/).
- **Cross-Platform Compatibility**: Designed to work on multiple platforms with consistent performance.
- **Efficient Image Processing**: Users can upload images and interact with AI models to perform image analysis.
- **Intuitive User Interface**: Built using **Vite** and **React** to provide a responsive and user-friendly experience.
- **Tauri Integration**: Utilizes **Tauri** for building lightweight, secure desktop applications with Rust.

## Tech Stack

- **Rust**: The core application is compiled using Rust, ensuring high performance and reliability.
- **Vite**: Fast and modern front-end build tool, providing an optimized development experience.
- **React**: A JavaScript library for building user interfaces, used for creating the front-end of the application.
- **Tauri**: A framework for building desktop applications using web technologies and Rust, ensuring cross-platform support.

## Installation and Setup

### Prerequisites

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (for Vite and React)
- [Tauri](https://tauri.app/) CLI
- [Rust](https://www.rust-lang.org/) (optional, if you want to contribute to the Rust backend)

### Clone the Repository

```bash
git clone https://github.com/yourusername/bridge.git
cd bridge
```

### Install Dependencies

#### Frontend (Vite & React)

```bash
cd frontend
npm install
```

### Running the Application

#### Development Mode

To run the application in development mode, use the following command:

```bash
npm run tauri dev
```

#### Build for Production

To build the application for production, use:

```bash
npm run tauri build
```

This will compile the application into an executable that can be run on your platform.

## Usage

1. **Upload an Image**: Use the image upload feature to send images for analysis.
2. **Select a Model**: Choose an open-source Vision Model or LLM to interact with.
3. **Submit Queries**: Ask questions or interact with the selected model using the intuitive interface.
4. **View Results**: The processed results will be displayed in the interface.
