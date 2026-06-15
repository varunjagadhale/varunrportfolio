import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiCalendar, FiAward } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import styles from './Education.module.css';

const educationList = [
  {
    degree: 'Bachelor of Engineering (ISE)',
    institution: 'Visvesvaraya Technological University',
    year: '2024',
    grade: 'CGPA: 7.21',
    details: 'Specialized in Information Science & Engineering. Studied software development lifecycle, web programming, algorithms, database systems, and networks.'
  },
  {
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'DRR Government Polytechnic College, Davanagere',
    board: 'Department of Technical Education',
    year: '2021',
    grade: 'Score: 65.5%',
    details: 'Acquired foundation in computer hardware, software assembly, fundamental algorithms, operating systems, and basic programming concepts.'
  }
];

const Education = () => {
  return (
    <section id="education" className={`section ${styles.educationSection}`}>
      <div className="container">
        <SectionHeader 
          title="Education" 
          subtitle="My academic background, degrees, and qualifications." 
        />

        <div className={styles.educationGrid}>
          {educationList.map((edu, idx) => (
            <motion.div
              key={idx}
              className={styles.educationCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
            >
              {/* Top accent border bar */}
              <div className={styles.topBar} />

              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  <FiBookOpen />
                </div>
                <div className={styles.headerInfo}>
                  <h3 className={styles.degree}>{edu.degree}</h3>
                  <h4 className={styles.institution}>{edu.institution}</h4>
                  {edu.board && <span className={styles.board}>{edu.board}</span>}
                </div>
              </div>

              <p className={styles.details}>{edu.details}</p>

              <div className={styles.cardFooter}>
                <span className={styles.metaBadge}>
                  <FiCalendar className={styles.footerIcon} /> {edu.year}
                </span>
                <span className={`${styles.metaBadge} ${styles.gradeBadge}`}>
                  <FiAward className={styles.footerIcon} /> {edu.grade}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
