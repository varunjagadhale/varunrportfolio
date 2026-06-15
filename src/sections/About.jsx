import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiZap, FiActivity } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import styles from './About.module.css';

const About = () => {
  const stats = [
    {
      icon: <FiBriefcase />,
      number: '1+ Year',
      title: 'Professional Experience',
      desc: 'Developing web & mobile applications'
    },
    {
      icon: <FiZap />,
      number: '15%',
      title: 'Speed Optimization',
      desc: 'Enhanced loading speeds of components'
    },
    {
      icon: <FiActivity />,
      number: '25+',
      title: 'Defects Resolved',
      desc: 'High-priority software bugs fixed'
    }
  ];

  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <SectionHeader 
          title="About Me" 
          subtitle="My professional journey, core motivations, and achievements." 
        />

        <div className={styles.aboutGrid}>
          {/* Left Biography Panel */}
          <motion.div 
            className={styles.bioPanel}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.bioTitle}>Passionate Developer & Problem Solver</h3>
            <p className={styles.bioText}>
              Junior Software Engineer with 1+ year of professional experience in web and mobile development. 
              Experienced in building and maintaining scalable applications using React.js, Node.js, 
              Express.js, and SQL databases.
            </p>
            <p className={styles.bioText}>
              Strong understanding of Agile/Scrum methodologies, SDLC, and collaborative environments. 
              Passionate about learning emerging technologies, solving complex problems, and delivering 
              high-quality software solutions.
            </p>
            <div className={styles.focusAreas}>
              <div className={styles.focusTag}>Agile/Scrum</div>
              <div className={styles.focusTag}>REST APIs</div>
              <div className={styles.focusTag}>Full Stack Development</div>
              <div className={styles.focusTag}>Database Tuning</div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className={styles.statCard}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              >
                <div className={styles.statIconWrapper}>
                  {stat.icon}
                </div>
                <h4 className={styles.statNumber}>{stat.number}</h4>
                <h5 className={styles.statTitle}>{stat.title}</h5>
                <p className={styles.statDesc}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
