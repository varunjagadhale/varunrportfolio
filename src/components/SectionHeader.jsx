import React from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeader.module.css';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className={styles.headerContainer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        <span className={styles.preTitle}>PORTFOLIO</span>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.lineWrapper}>
          <div className={styles.line} />
          <div className={styles.lineDot} />
        </div>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
