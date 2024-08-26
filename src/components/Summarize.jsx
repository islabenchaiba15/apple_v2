
const SummarizeApp = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <header className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Sumz" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Sumz</span>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-full">
          GitHub
        </button>
      </header>
      
      <main className="text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <span className="text-2xl bg-gray-700 text-white p-2 rounded">⏹</span>
          <span className="text-2xl bg-gray-700 text-white p-2 rounded">▶</span>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">
          Summarize Articles with<br />
          <span className="text-orange-500">OpenAI GPT-4</span>
        </h1>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </p>
        
        <div className="flex mb-6">
          <input 
            type="text" 
            placeholder="Paste the article link" 
            className="flex-grow p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white p-3 rounded-r-md">
            ↵
          </button>
        </div>
        
        <div className="text-left space-y-2">
          <div className="bg-gray-100 p-3 rounded text-sm text-gray-700 truncate">
            https://www.jsmastery.pro/knowledge-base/fullstack/full-stack-developer-boot...
          </div>
          <div className="bg-gray-100 p-3 rounded text-sm text-gray-700 truncate">
            https://rapidapi.com/blog/leveraging-ai-apps-for-super-intelligent-apps/
          </div>
        </div>
      </main>
    </div>
  );
}

export default SummarizeApp;