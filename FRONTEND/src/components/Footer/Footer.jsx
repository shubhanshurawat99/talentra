import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../../models/contentModel';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>Guidemyway</Link>
        <p className={styles.tagline}> Consulting</p>
       
        <p className={styles.copy}>{COMPANY.copyright}</p>
      </div>
    </footer>
  );
}
