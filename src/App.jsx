import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout & Common Components
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

// Portfolio Sections
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div 
            key="preloader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loader finishLoading={() => setIsLoading(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header Navigation */}
          <Navbar />

          {/* Main Sections */}
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Back to top toggle */}
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}

export default App;
