import React from 'react';
import styles from './SectionHeader.module.css';
export default function SectionHeader({ label, title, subtitle, light = false }) {
  return (
    <div className={`${styles.header} ${light ? styles.light : ''}`}>
      {label && <div className={styles.label}>{label}</div>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  );
}
