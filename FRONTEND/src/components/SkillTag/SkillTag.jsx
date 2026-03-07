import React from 'react';
import styles from './SkillTag.module.css';
export default function SkillTag({ label, onRemove }) {
  return (
    <div className={styles.tag}>
      {label}
      {onRemove && (
        <button type="button" onClick={() => onRemove(label)} aria-label={`Remove ${label}`}>×</button>
      )}
    </div>
  );
}
