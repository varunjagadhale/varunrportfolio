import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import styles from './Experience.module.css';

const experiences = [
  {
    company: 'Navabharth Technologies',
    role: 'Junior Software Engineer',
    location: 'Mysuru, Karnataka (WFO)',
    duration: 'Dec 2025 – Present',
    responsibilities: [
      'Developed and optimized 5+ dynamic components for a core web and mobile application using React Native and Node.js.',
      'Improved system loading speed by 15%.',
      'Collaborated daily in Agile/Scrum sprints with project managers and developers.',
      'Identified and resolved 25+ high-priority software defects.',
      'Utilized REST APIs and SQL databases to process user authentication data efficiently.'
    ]
  },
  {
    company: 'Hindustan Aeronautics Limited (HAL)',
    role: 'Apprentice Trainee',
    location: 'Bengaluru, Karnataka (WFO)',
    duration: 'Feb 2025 – Aug 2025',
    responsibilities: [
      'Engineered a Flask-integrated conversational agent reducing manual oversight by 50%.',
      'Improved customer interactions through rapid query resolution.',
      'Designed and deployed an interactive Flask chatbot using Python, HTML, and CSS.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <SectionHeader 
          title="Professional Experience" 
          subtitle="My professional work history and technical achievements in the industry." 
        />

        <div className={styles.timeline}>
          {/* Vertical timeline line */}
          <div className={styles.timelineLine} />

          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.timelineItem}>
              {/* Timeline dot with icon */}
              <div className={styles.timelineDot}>
                <FiBriefcase />
              </div>

              {/* Timeline Card Content */}
              <motion.div 
                className={styles.timelineCard}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 30 : -30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 80 }}
                whileHover={{ y: -3, boxShadow: 'var(--shadow-hover)' }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.roleHeader}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <h4 className={styles.company}>{exp.company}</h4>
                  </div>
                  
                  {/* Meta badges */}
                  <div className={styles.metaBadges}>
                    <span className={styles.metaBadge}>
                      <FiCalendar className={styles.metaIcon} /> {exp.duration}
                    </span>
                    <span className={styles.metaBadge}>
                      <FiMapPin className={styles.metaIcon} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Job Bullet Points */}
                <ul className={styles.responsibilities}>
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className={styles.responsibilityItem}>
                      <span className={styles.bulletPoint} />
                      <p className={styles.responsibilityText}>{resp}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
