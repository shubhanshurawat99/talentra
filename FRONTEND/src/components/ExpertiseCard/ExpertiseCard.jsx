import React from 'react';
import styles from './ExpertiseCard.module.css';
export default function ExpertiseCard({ icon, title, description, tags = [], wide = false }) {
  return (
    <div className={`${styles.card} ${wide ? styles.wide : ''}`}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <div className={styles.tags}>{tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}</div>
    </div>
  );
}
