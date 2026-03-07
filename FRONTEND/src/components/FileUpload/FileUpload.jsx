import React, { useRef, useState } from 'react';
import styles from './FileUpload.module.css';
export default function FileUpload({ onFileChange, error }) {
  const inputRef = useRef();
  const [fileName, setFileName] = useState('');
  const [dragging, setDragging] = useState(false);
  const handleFile = (file) => { if (!file) return; setFileName(file.name); onFileChange(file); };
  return (
    <div
      className={`${styles.zone} ${dragging ? styles.drag : ''} ${error ? styles.hasError : ''}`}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => { e.preventDefault(); setDragging(false); handleFile(e.dataTransfer.files[0]); }}
    >
      <input ref={inputRef} type="file" accept=".pdf,.doc,.docx" className={styles.hidden} onChange={(e) => handleFile(e.target.files[0])} />
      <div className={styles.icon}>📎</div>
      <p><span className={styles.link} onClick={() => inputRef.current.click()}>Click to upload</span> or drag &amp; drop your CV</p>
      <p className={styles.hint}>PDF, DOC, DOCX — Max 5MB</p>
      {fileName && <p className={styles.fileName}>📄 {fileName}</p>}
    </div>
  );
}
