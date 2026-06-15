import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCode, FiMessageCircle, FiChevronRight } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import styles from './Certifications.module.css';

const certifications = [
  {
    title: 'AWS and DevOps Training',
    issuer: 'MNP Technologies',
    year: '2025',
    icon: <FiAward />,
    type: 'Cloud & Infrastructure'
  },
  {
    title: 'Complete Full Stack Web Development Bootcamp',
    issuer: 'Udemy',
    year: '2025',
    icon: <FiBook />,
    type: 'Full Stack Development'
  },
  {
    title: '100 Days of Code: Python Bootcamp',
    issuer: 'Udemy',
    year: '2024',
    icon: <FiCode />,
    type: 'Programming Logic'
  },
  {
    title: 'Coding Hackathon Participant',
    issuer: 'Hackathon Event',
    year: '2023',
    icon: <FiAward />,
    type: 'Competitive Coding'
  }
];

const languages = [
  { name: 'English', level: 'Professional Working', percentage: 90 },
  { name: 'Kannada', level: 'Native / Bilingual', percentage: 100 },
  { name: 'Hindi', level: 'Professional Working', percentage: 80 }
];

const Certifications = () => {
  return (
    <section id="certifications" className={`section ${styles.certSection} bg-gradient-soft`}>
      <div className="container">
        <SectionHeader 
          title="Certifications & Languages" 
          subtitle="My professional training, technical credentials, and language fluencies." 
        />

        <div className={styles.splitGrid}>
          {/* Certifications Panel */}
          <div className={styles.certColumn}>
            <h3 className={styles.columnTitle}>Certifications & Achievements</h3>
            
            <div className={styles.certList}>
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className={styles.certCard}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ x: 6, backgroundColor: 'var(--bg-secondary)' }}
                >
                  <div className={styles.certIconWrapper}>
                    {cert.icon}
                  </div>
                  <div className={styles.certInfo}>
                    <span className={styles.certType}>{cert.type}</span>
                    <h4 className={styles.certTitle}>{cert.title}</h4>
                    <p className={styles.certIssuer}>{cert.issuer} • <span className={styles.certYear}>{cert.year}</span></p>
                  </div>
                  <FiChevronRight className={styles.arrowIcon} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Languages Panel */}
          <div className={styles.langColumn}>
            <h3 className={styles.columnTitle}>Languages Spoken</h3>
            
            <div className={styles.langCard}>
              <div className={styles.langIntro}>
                <div className={styles.messageIconWrapper}>
                  <FiMessageCircle />
                </div>
                <div>
                  <h4 className={styles.langIntroTitle}>Multilingual Communicator</h4>
                  <p className={styles.langIntroDesc}>Fluent in regional and global languages, enabling effective collaboration in diverse teams.</p>
                </div>
              </div>

              <div className={styles.langList}>
                {languages.map((lang, idx) => (
                  <motion.div 
                    key={idx} 
                    className={styles.langItem}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className={styles.langHeader}>
                      <span className={styles.langName}>{lang.name}</span>
                      <span className={styles.langLevel}>{lang.level}</span>
                    </div>
                    {/* Visual bar tracker for proficiency */}
                    <div className={styles.langBarContainer}>
                      <motion.div 
                        className={styles.langBar}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
