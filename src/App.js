import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Blog from './sections/Blog';
import AcademicTimeline from './sections/AcademicTimeline';
import Social from './sections/Social';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Blog />
        <AcademicTimeline />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
