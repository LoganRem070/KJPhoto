
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const PhotoServices = lazy(() => import('./pages/PhotoServices'));
const VideoServices = lazy(() => import('./pages/VideoServices'));
const PhotoBoothPage = lazy(() => import('./pages/PhotoBoothPage'));

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter hover:text-gray-300 transition-colors uppercase">
          K&J <span className="text-gray-500">PHOTOGRAPHY</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center text-sm font-medium tracking-widest uppercase">
          {[
            { name: 'Home', path: '/' },
            { name: 'Photography', path: '/photo' },
            { name: 'Cinema', path: '/video' },
            { name: 'Photo Booths', path: '/booths' },
          ].map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`hover:text-white transition-all duration-300 relative py-2 ${location.pathname === link.path ? 'text-white' : 'text-gray-500'}`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline" 
                  className="absolute bottom-0 left-0 right-0 h-px bg-white" 
                />
              )}
            </Link>
          ))}
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold hover:bg-gray-200 transition-all uppercase tracking-tighter">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
        <Navbar />
        <main className="pt-20">
          <AnimatePresence mode="wait">
            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-2xl font-light tracking-widest animate-pulse">K&J</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photo" element={<PhotoServices />} />
                <Route path="/video" element={<VideoServices />} />
                <Route path="/booths" element={<PhotoBoothPage />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        
        <footer className="bg-neutral-950 border-t border-white/5 py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h2 className="text-xl font-bold tracking-widest">K&J</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Capturing the essence of light and emotion through high-end digital artistry.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Services</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Wedding Photography</li>
                <li>Commercial Cinema</li>
                <li>Corporate Events</li>
                <li>Interactive Experiences</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="text-gray-500 text-sm space-y-2">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Booking Contract</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 uppercase text-xs tracking-widest">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-white/30" />
                <button className="bg-white text-black px-4 py-2 rounded-lg text-xs font-bold">→</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
            <p>© 2024 K&J Photography. All Rights Reserved.</p>
            <div className="flex gap-6">
              <span>Instagram</span>
              <span>Vimeo</span>
              <span>Facebook</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
