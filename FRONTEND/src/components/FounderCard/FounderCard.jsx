import React from 'react';
import styles from './FounderCard.module.css';
export default function FounderCard({ initials, name, role, focus, bio = [] }) {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}><span>{initials}</span></div>
      <div className={styles.body}>
        <span className={styles.roleTag}>{role}</span>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.focus}>{focus}</p>
        {bio.map((para, i) => <p key={i} className={styles.bio}>{para}</p>)}
      </div>
    </div>
  );
}
