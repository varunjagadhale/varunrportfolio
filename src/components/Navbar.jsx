import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Education', target: 'education' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section using Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Highlights section as it reaches middle of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.target);
      if (section) observer.observe(section);
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.target);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    const section = document.getElementById(target);
    if (section) {
      setIsMobileMenuOpen(false);
      // Offset for sticky navbar
      const navbarHeight = 80;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navContainer} container`}>
        {/* Monogram Brand */}
        <a href="#home" className={styles.brand} onClick={(e) => handleNavClick(e, 'home')}>
          <span>V</span><span>R</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className={`${styles.navLink} ${activeSection === link.target ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact CTA Button on Navbar */}
        <a 
          href="#contact" 
          className={styles.contactBtn}
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          Let's Talk
        </a>

        {/* Hamburger Menu Icon */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.target}>
              <a
                href={`#${link.target}`}
                className={`${styles.mobileLink} ${activeSection === link.target ? styles.active : ''}`}
                onClick={(e) => handleNavClick(e, link.target)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className={styles.mobileContactBtn}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
