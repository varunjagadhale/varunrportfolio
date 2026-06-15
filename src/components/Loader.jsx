import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Loader.module.css';

const Loader = ({ finishLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            finishLoading();
          }, 400); // Small buffer after 100%
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.content}>
        {/* Monogram Monolith */}
        <motion.div
          className={styles.logoCircle}
          initial={{ scale: 0.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          <motion.span 
            className={styles.logoText}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            VR
          </motion.span>
        </motion.div>

        {/* Loading text and percentage */}
        <div className={styles.progressTextWrapper}>
          <span className={styles.loadingText}>Loading Portfolio</span>
          <span className={styles.percentage}>{progress}%</span>
        </div>

        {/* Progress Bar Container */}
        <div className={styles.progressContainer}>
          <motion.div
            className={styles.progressBar}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
