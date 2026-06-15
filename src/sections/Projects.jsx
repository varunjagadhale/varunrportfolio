import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiUsers, FiCalendar } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Multi-Application E-Commerce Platform',
    duration: 'Dec 2025 – May 2026',
    icon: <FiShoppingCart />,
    technologies: ['React Native', 'React.js', 'Node.js', 'Express.js', 'MSSQL Server'],
    highlights: [
      'Developed scalable e-commerce platform supporting web and mobile layouts.',
      'Implemented secure JWT authentication and route guard rails.',
      'Reduced checkout API response delay by 10% via redis caching strategies.',
      'Automated web forms to increase client registration velocity.',
      'Hosted deployments using GitHub Pages and Azure App Services.'
    ],
    github: 'https://github.com/varunjagadhale',
    demo: 'https://github.com/varunjagadhale'
  },
  {
    title: 'Lead Management CRM System',
    duration: 'March 2026 – April 2026',
    icon: <FiUsers />,
    technologies: ['React.js', 'Node.js', 'Express.js', 'MSSQL Server'],
    highlights: [
      'Built CRM for lead and customer tracking, handling complex state pipelines.',
      'Managed 1000+ interactions monthly with smooth list virtualization.',
      'Implemented robust authentication and Role-Based Access Controls (RBAC).',
      'Utilized Git version control and Scrum in Agile team collaboration.',
      'Optimized database queries, reducing data retrieval time by 25%.'
    ],
    github: 'https://github.com/varunjagadhale',
    demo: 'https://github.com/varunjagadhale'
  }
];

const Projects = () => {
  return (
    <section id="projects" className={`section ${styles.projectsSection} bg-gradient-soft`}>
      <div className="container">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A selection of commercial-grade web and mobile applications I have designed and engineered." 
        />

        <div className={styles.projectsGrid}>
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: 'var(--shadow-hover)' }}
            >
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                  {project.icon}
                </div>
                <span className={styles.dateBadge}>
                  <FiCalendar className={styles.calendarIcon} /> {project.duration}
                </span>
              </div>

              {/* Title & Info */}
              <h3 className={styles.projectTitle}>{project.title}</h3>

              {/* Tech Badges */}
              <div className={styles.techContainer}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.techBadge}>{tech}</span>
                ))}
              </div>

              {/* Project highlights list */}
              <ul className={styles.highlights} style={{ marginBottom: 0 }}>
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className={styles.highlightItem}>
                    <span className={styles.highlightBullet} />
                    <p className={styles.highlightText}>{highlight}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
