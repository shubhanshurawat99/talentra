import React from 'react';
import styles from './DiffItem.module.css';
export default function DiffItem({ number, title, body }) {
  return (
    <div className={styles.item}>
      <div className={styles.num}>{number}</div>
      <div className={styles.body}><h4>{title}</h4><p>{body}</p></div>
    </div>
  );
}
