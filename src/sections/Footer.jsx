import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        {/* Footer Monogram Logo */}
        <a href="#home" className={styles.logo} onClick={handleLogoClick}>
          <span>V</span><span>R</span>
        </a>

        {/* Short Text Bio */}
        <p className={styles.description}>
          Junior Software Engineer focused on building scalable, performance-optimized web & mobile applications.
        </p>

        {/* Social Links */}
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/varun-r-600057247/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="https://github.com/varunjagadhale" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="mailto:varurr70@gmail.com" className={styles.socialIcon} aria-label="Email">
            <FiMail />
          </a>
        </div>

        {/* Separator Line */}
        <div className={styles.separator} />

        {/* Copyright and Attribution */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {currentYear} Varun R. All rights reserved.
          </p>
          <p className={styles.attribution}>
            Designed & Developed by <span>Varun R</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
