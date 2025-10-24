import React from 'react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-slate-900 text-white font-sans overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vh] bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-700 rounded-full blur-[200px] opacity-15"></div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
        <div className="text-center">
          
          {/* Main Message */}
          <div className="space-y-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 animate-pulse-glow">
                Wait for new Updates.
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
              It may need <span className="font-bold text-white">7 Days</span> to be finished.
            </p>
          </div>

          {/* Developer Credit */}
          <div className="mt-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center text-gray-400 text-sm md:text-base">
              Developed by 
              <a 
                href="#" 
                className="font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 ml-1.5 animate-electric-shock"
                onClick={(e) => e.preventDefault()}
              >
                KAYUM
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
