🌌 LumenGemini – Lightweight Gemini Clone

⚡ A sleek and responsive Gemini clone built with React.js and powered by the Gemini 1.5 Pro Flash API.
  Inspired by Google Gemini 2.0, this project brings AI-powered conversational experiences directly to your browser with a modern, minimalistic design.

✨ Features

     🗨 Real-time chat interface with instant responses

    ⏳ Typing and loading indicators for a natural conversational feel

    📱 Fully responsive across mobile, tablet, and desktop

    ⚡ Powered by Gemini 1.5 Pro Flash API for advanced AI responses

    🎨 Clean and modern UI built with Tailwind CSS
 
    🛡 Secure API key management using .env

🛠 Tech Stack

    .Frontend: React.js ⚛

    .Styling: CSS / Tailwind 🎨

    .Backend / API: Node.js + Gemini API 🤖

    .Environment Management: Vite 🌱

📂 Project Structure

     lumen-gemini/
     
     ├─ public/                 # Static assets
   
     │  └─ index.html
  
     ├─ src/
  
     │  ├─ assets/              # Images, icons, and fonts
  
     │  ├─ components/          # Reusable React components (ChatBox, Message, Loader)
  
     │  ├─ pages/               # Page components (Home, About, Settings)
  
     │  ├─ services/            # API service for Gemini requests
  
     │  ├─ styles/              # Tailwind / CSS files
  
     │  ├─ App.jsx              # Main App component
    
     │  └─ main.jsx             # Entry point
  
     ├─ .env                    # Environment variables (API key)
  
     ├─ package.json            # Dependencies and scripts'
  
     └─ README.md               # Project documentation

🚀 Installation & Setup

     # 1. Clone the repository
     git clone https://github.com/<your-username>/lumen-gemini.git

     # 2. Navigate into the project folder
     cd lumen-gemini

     # 3. Install dependencies
     npm install

     # 4. Create a .env file in the root and add your Gemini API key
     VITE_GEMINI_API_KEY=your_api_key_here

     # 5. Start the development server
     npm run dev

