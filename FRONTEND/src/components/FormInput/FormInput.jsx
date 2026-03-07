// Reusable labeled input/select/textarea with inline error display
import React from 'react';
import styles from './FormInput.module.css';

export default function FormInput({
  label, name, type = 'text', value, onChange,
  placeholder = '', error = '', required = false,
  as = 'input', children, ...rest
}) {
  const Tag = as;
  const hasError = Boolean(error);

  return (
    <div className={styles.group}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}{required && <span className={styles.req}> *</span>}
        </label>
      )}
      <Tag
        id={name} name={name} type={type !== 'select' ? type : undefined}
        value={value} onChange={onChange}
        placeholder={placeholder}
        className={`${styles.control} ${hasError ? styles.error : ''}`}
        {...rest}
      >
        {children}
      </Tag>
      {hasError && <span className={styles.errMsg}>{error}</span>}
    </div>
  );
}
