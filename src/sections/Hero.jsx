import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import styles from './Hero.jsx.module.css'; // Standardized css module naming

const Hero = () => {
  const socialLinks = [
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/varun-r-600057247/', label: 'LinkedIn' },
    { icon: <FiGithub />, url: 'https://github.com/varunjagadhale', label: 'GitHub' }
  ];

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = 80;
      const sectionTop = contactSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = (e) => {
    e.preventDefault();
    
    // Fetch as blob to force Chrome to honor the filename even through proxies
    fetch('/VarunR_2026.pdf')
      .then((response) => {
        if (!response.ok) throw new Error('Response error');
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'VarunR_2026.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((err) => {
        console.error('Blob download failed, falling back to direct link:', err);
        const fallback = document.createElement('a');
        fallback.href = '/VarunR_2026.pdf';
        fallback.download = 'VarunR_2026.pdf';
        fallback.click();
      });
  };

  return (
    <section id="home" className={`section ${styles.heroSection} bg-gradient-soft`}>
      <div className={`${styles.heroContainer} container`}>
        {/* Left Content Column */}
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className={styles.greeting}>Hello, I'm</span>
          <h1 className={styles.name}>VARUN R</h1>
          <h2 className={styles.title}>Junior Software Engineer</h2>
          <p className={styles.subtitle}>
            Building scalable web and mobile applications with modern technologies.
          </p>

          {/* Contact Quick Links */}
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <FiMapPin className={styles.detailIcon} />
              <span>Mysore, Karnataka</span>
            </div>
            <div className={styles.detailItem}>
              <FiPhone className={styles.detailIcon} />
              <a href="tel:9449216130">9449216130</a>
            </div>
            <div className={styles.detailItem}>
              <FiMail className={styles.detailIcon} />
              <a href="mailto:varurr70@gmail.com">varurr70@gmail.com</a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaWrapper}>
            <a 
              href="/VarunR_2026.pdf" 
              onClick={handleDownloadResume}
              className={styles.primaryBtn}
            >
              <FiDownload style={{ marginRight: '8px' }} /> Download Resume
            </a>
            <a 
              href="#contact" 
              onClick={handleContactClick} 
              className={styles.secondaryBtn}
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className={styles.socials}>
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Illustration Column */}
        <motion.div 
          className={styles.illustrationWrapper}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          <svg viewBox="0 0 500 450" className={styles.heroSvg} xmlns="http://www.w3.org/2000/svg">
            {/* Background Blob/Halo */}
            <defs>
              <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(37, 99, 235, 0.08)" />
                <stop offset="100%" stopColor="rgba(15, 23, 42, 0.03)" />
              </linearGradient>
              <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.06"/>
              </filter>
            </defs>
            <circle cx="250" cy="225" r="180" fill="url(#blobGrad)" />

            {/* Laptop Base & Screen */}
            <g transform="translate(60, 110)">
              {/* Laptop Screen Frame */}
              <rect x="30" y="30" width="320" height="200" rx="12" fill="#0f172a" filter="url(#shadow)"/>
              {/* Inner Screen */}
              <rect x="42" y="42" width="296" height="176" rx="6" fill="#1e293b"/>
              
              {/* IDE Top Bar */}
              <rect x="42" y="42" width="296" height="24" rx="6" fill="#0f172a"/>
              {/* Window Controls */}
              <circle cx="58" cy="54" r="4" fill="#ef4444" />
              <circle cx="70" cy="54" r="4" fill="#eab308" />
              <circle cx="82" cy="54" r="4" fill="#22c55e" />
              {/* Tab Label */}
              <text x="100" y="58" fill="#94a3b8" fontSize="10" fontFamily="monospace">App.jsx</text>

              {/* IDE Code Lines */}
              <g transform="translate(55, 90)">
                <text x="0" y="0" fill="#f43f5e" fontSize="11" fontFamily="monospace" fontWeight="bold">const</text>
                <text x="45" y="0" fill="#3b82f6" fontSize="11" fontFamily="monospace">Developer</text>
                <text x="110" y="0" fill="#e2e8f0" fontSize="11" fontFamily="monospace">= () =&gt; &#123;</text>
                
                <text x="20" y="22" fill="#38bdf8" fontSize="11" fontFamily="monospace">const</text>
                <text x="60" y="22" fill="#e2e8f0" fontSize="11" fontFamily="monospace">[skills, setSkills]</text>
                <text x="195" y="22" fill="#f43f5e" fontSize="11" fontFamily="monospace">=</text>
                <text x="210" y="22" fill="#eab308" fontSize="11" fontFamily="monospace">useState(</text>
                
                <text x="40" y="44" fill="#e2e8f0" fontSize="11" fontFamily="monospace">[</text>
                <text x="50" y="44" fill="#22c55e" fontSize="11" fontFamily="monospace">"React"</text>
                <text x="105" y="44" fill="#e2e8f0" fontSize="11" fontFamily="monospace">,</text>
                <text x="115" y="44" fill="#22c55e" fontSize="11" fontFamily="monospace">"Node"</text>
                <text x="160" y="44" fill="#e2e8f0" fontSize="11" fontFamily="monospace">,</text>
                <text x="170" y="44" fill="#22c55e" fontSize="11" fontFamily="monospace">"MSSQL"</text>
                <text x="225" y="44" fill="#e2e8f0" fontSize="11" fontFamily="monospace">]</text>

                <text x="20" y="66" fill="#f43f5e" fontSize="11" fontFamily="monospace">return</text>
                <text x="65" y="66" fill="#e2e8f0" fontSize="11" fontFamily="monospace">(</text>

                <text x="40" y="88" fill="#f43f5e" fontSize="11" fontFamily="monospace">&lt;</text>
                <text x="50" y="88" fill="#3b82f6" fontSize="11" fontFamily="monospace">Portfolio</text>
                <text x="115" y="88" fill="#a855f7" fontSize="11" fontFamily="monospace">status</text>
                <text x="160" y="88" fill="#f43f5e" fontSize="11" fontFamily="monospace">=</text>
                <text x="170" y="88" fill="#22c55e" fontSize="11" fontFamily="monospace">"scalable"</text>
                <text x="235" y="88" fill="#f43f5e" fontSize="11" fontFamily="monospace">/&gt;</text>
                
                <text x="20" y="110" fill="#e2e8f0" fontSize="11" fontFamily="monospace">);</text>
                <text x="0" y="132" fill="#e2e8f0" fontSize="11" fontFamily="monospace">&#125;;</text>
              </g>
              
              {/* Laptop Keyboard Area */}
              <path d="M 10,230 L 370,230 L 390,250 L -10,250 Z" fill="#cbd5e1" filter="url(#shadow)"/>
              {/* Laptop Trackpad */}
              <rect x="160" y="234" width="60" height="12" rx="3" fill="#94a3b8" />
              {/* Screen shadow inside hinge */}
              <rect x="30" y="228" width="320" height="4" fill="#475569" />
            </g>

            {/* Floating Tech Badges with animation tags */}
            {/* React Badge */}
            <g transform="translate(350, 80)">
              <circle cx="30" cy="30" r="28" fill="#ffffff" filter="url(#shadow)"/>
              <path d="M 20,24 C 20,20 40,20 40,24 C 40,28 20,32 20,36 C 20,40 40,40 40,36 C 40,32 20,28 20,24" fill="none" stroke="#61dafb" strokeWidth="2"/>
              <ellipse cx="30" cy="30" rx="16" ry="6" fill="none" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(30 30 30)" />
              <ellipse cx="30" cy="30" rx="16" ry="6" fill="none" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(90 30 30)" />
              <ellipse cx="30" cy="30" rx="16" ry="6" fill="none" stroke="#00d8ff" strokeWidth="1.5" transform="rotate(150 30 30)" />
              <circle cx="30" cy="30" r="3" fill="#00d8ff" />
            </g>

            {/* Python Badge */}
            <g transform="translate(30, 220)">
              <circle cx="30" cy="30" r="28" fill="#ffffff" filter="url(#shadow)"/>
              <g transform="translate(18, 16) scale(0.8)">
                <path d="M 15,0 C 6.7,0 0,6.7 0,15 L 0,21 C 0,24.3 2.7,27 6,27 L 11,27 L 11,25.5 C 11,22.4 13.5,19.9 16.6,19.9 L 26,19.9 C 29.3,19.9 32,17.2 32,13.9 L 32,7.9 C 32,3.5 24.3,0 15,0 Z" fill="#306998"/>
                <path d="M 17,30 C 25.3,30 32,23.3 32,15 L 32,9 C 32,5.7 29.3,3 26,3 L 21,3 L 21,4.5 C 21,7.6 18.5,10.1 15.4,10.1 L 6,10.1 C 2.7,10.1 0,12.8 0,16.1 L 0,22.1 C 0,26.5 7.7,30 17,30 Z" fill="#ffd43b"/>
                <circle cx="9" cy="6" r="1.5" fill="#ffffff"/>
                <circle cx="23" cy="24" r="1.5" fill="#ffffff"/>
              </g>
            </g>

            {/* Mobile Devices Mockup */}
            <g transform="translate(350, 260)">
              {/* Phone Frame */}
              <rect x="10" y="10" width="60" height="110" rx="10" fill="#0f172a" filter="url(#shadow)"/>
              {/* Screen */}
              <rect x="14" y="18" width="52" height="94" rx="6" fill="#f8fafc"/>
              {/* Top Notch */}
              <rect x="30" y="13" width="20" height="4" rx="2" fill="#1e293b"/>
              {/* Mobile Web Interface */}
              <rect x="20" y="26" width="40" height="12" rx="2" fill="#2563eb" opacity="0.8"/>
              <rect x="20" y="44" width="40" height="4" rx="1" fill="#cbd5e1"/>
              <rect x="20" y="52" width="28" height="4" rx="1" fill="#cbd5e1"/>
              <rect x="20" y="62" width="40" height="30" rx="3" fill="#e2e8f0"/>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
