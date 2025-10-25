
import React from 'react';

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const AlertIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);

const ElectricGlowAnimation = () => (
    <style>{`
        @keyframes electric-glow {
            0%, 100% {
                text-shadow:
                0 0 5px #fff,
                0 0 10px #0ea5e9,
                0 0 20px #0ea5e9,
                0 0 30px #0ea5e9;
            }
            50% {
                text-shadow:
                0 0 2px #fff,
                0 0 8px #38bdf8,
                0 0 15px #38bdf8;
            }
        }
        .animate-glow {
            animation: electric-glow 2.5s ease-in-out infinite;
        }
    `}</style>
);


const App: React.FC = () => {
  return (
    <main className="min-h-screen w-full bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] antialiased">
      <ElectricGlowAnimation />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="relative max-w-lg w-full bg-slate-800/70 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl shadow-blue-500/10 overflow-hidden">
          
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-50"></div>

          <div className="relative p-8 sm:p-10 flex flex-col items-center text-center space-y-6">
            <div className="bg-blue-500/10 p-3 rounded-full border border-blue-500/20">
              <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight">
                New Version Available!
              </h1>
              <p className="text-base sm:text-lg text-slate-300">
                Try our new version — <span className="font-semibold text-blue-400">WorkUp Job AI Pro 1.2</span>
              </p>
            </div>

            <a
              href="https://u.pcloud.link/publink/show?code=XZJnW95Zyr3gb0hCiN5ivBb2BCLwqQtvvgrX"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-blue-600/40 w-full sm:w-auto"
            >
              <DownloadIcon className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Download Now</span>
            </a>

            <p className="text-xl text-slate-400 pt-8 tracking-wide">
              Developed by:{' '}
              <span className="font-black text-sky-400 uppercase tracking-widest animate-glow">
                KAYUM
              </span>
            </p>

            <div className="w-full bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mt-4">
              <div className="flex items-start space-x-3">
                <AlertIcon className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-bold text-yellow-300">Important Note</h3>
                  <p className="text-sm text-yellow-400">
                    This version won’t work unless you use the latest version.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
