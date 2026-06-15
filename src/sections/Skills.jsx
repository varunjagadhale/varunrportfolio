import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiHtml5, SiDjango, SiFlask, 
  SiPostman, SiFigma, SiExpo, SiKubernetes, SiJenkins
} from 'react-icons/si';
import { FaLinux, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaCloud, FaExchangeAlt, FaCss3Alt, FaDatabase } from 'react-icons/fa';
import { FiCode } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';
import styles from './Skills.module.css';

const skillCategories = [
  { id: 'languages', name: 'Languages' },
  { id: 'frameworks', name: 'Frameworks & Libraries' },
  { id: 'tools', name: 'Tools' },
  { id: 'databases', name: 'Databases' },
  { id: 'cloudDevops', name: 'Cloud & Methodologies' }
];

const skillsData = {
  languages: [
    { name: 'Python', percentage: 90, icon: <SiPython color="#3776AB" /> },
    { name: 'JavaScript', percentage: 90, icon: <SiJavascript color="#F7DF1E" style={{ backgroundColor: '#000', padding: '1px', borderRadius: '2px' }} /> },
    { name: 'Linux', percentage: 80, icon: <FaLinux color="#FCC624" /> },
    { name: 'HTML', percentage: 95, icon: <SiHtml5 color="#E34F26" /> },
    { name: 'CSS', percentage: 90, icon: <FaCss3Alt color="#1572B6" /> }
  ],
  frameworks: [
    { name: 'React.js', percentage: 90, icon: <FaReact color="#61DAFB" /> },
    { name: 'React Native', percentage: 85, icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', percentage: 85, icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', percentage: 80, icon: <SiJavascript color="#000000" style={{ color: '#fff', backgroundColor: '#000', borderRadius: '4px', padding: '2px' }} /> },
    { name: 'Django', percentage: 70, icon: <SiDjango color="#092E20" /> },
    { name: 'Flask', percentage: 75, icon: <SiFlask color="#000000" /> }
  ],
  tools: [
    { name: 'Git', percentage: 90, icon: <FaGitAlt color="#F05032" /> },
    { name: 'GitHub', percentage: 90, icon: <FaGithub color="#181717" /> },
    { name: 'Postman', percentage: 85, icon: <SiPostman color="#FF6C37" /> },
    { name: 'VS Code', percentage: 95, icon: <FiCode color="#007ACC" /> },
    { name: 'Figma', percentage: 75, icon: <SiFigma color="#F24E1E" /> },
    { name: 'Expo', percentage: 80, icon: <SiExpo color="#000020" /> }
  ],
  databases: [
    { name: 'MSSQL', percentage: 80, icon: <FaDatabase color="#CC292B" /> }
  ],
  cloudDevops: [
    { name: 'Azure App Service', percentage: 75, icon: <FaCloud color="#0089D6" /> },
    { name: 'Kubernetes', percentage: 70, icon: <SiKubernetes color="#326CE5" /> },
    { name: 'Jenkins', percentage: 75, icon: <SiJenkins color="#D24939" /> },
    { name: 'CI/CD Pipelines', percentage: 75, icon: <FaGitAlt color="#2088FF" /> },
    { name: 'REST APIs', percentage: 90, icon: <FaExchangeAlt color="#475569" /> }
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills" className={`section ${styles.skillsSection} bg-gradient-soft`}>
      <div className="container">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="My expertise across programming languages, framework stacks, databases, and DevOps tools." 
        />

        {/* Tab Controls */}
        <div className={styles.tabContainer}>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`${styles.tabBtn} ${activeCategory === category.id ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              {activeCategory === category.id && (
                <motion.div 
                  layoutId="activeTabUnderline" 
                  className={styles.tabUnderline}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className={styles.gridContainer}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className={styles.skillsGrid}
            >
              {skillsData[activeCategory].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className={styles.skillCard}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.skillIcon}>
                      {skill.icon}
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercentage}>{skill.percentage}%</span>
                  </div>
                  
                  {/* Skill Progress Bar */}
                  <div className={styles.progressContainer}>
                    <motion.div
                      className={styles.progressBar}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut', delay: index * 0.05 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
