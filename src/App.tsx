/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewType } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import GalleryView from './components/GalleryView';
import PhotoboothView from './components/PhotoboothView';
import PackagesView from './components/PackagesView';
import HighlightsView from './components/HighlightsView';
import ContactView from './components/ContactView';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [currentView, setView] = useState<ViewType>('home');

  // Safety scroll-to-top on change of page view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentView]);

  const renderActiveView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView setView={setView} />;
      case 'gallery':
        return <GalleryView />;
      case 'photobooth':
        return <PhotoboothView setView={setView} />;
      case 'packages':
        return <PackagesView setView={setView} />;
      case 'highlights':
        return <HighlightsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-bg text-luxury-fg flex flex-col justify-between selection:bg-luxury-accent selection:text-black">
      
      {/* Sticky Topbar Navbar */}
      <Navbar currentView={currentView} setView={setView} />

      {/* Screen Wrapper with Smooth Animate Gate */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full"
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Editorial Footer */}
      <Footer setView={setView} />

    </div>
  );
}
