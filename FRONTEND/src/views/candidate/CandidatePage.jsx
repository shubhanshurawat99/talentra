// VIEW: CandidatePage — wired to useCandidateController
import React from 'react';
import { useCandidateController } from '../../controllers/candidateController';
import { EXPERIENCE_OPTIONS } from '../../models/candidateModel';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import FormInput from '../../components/FormInput/FormInput';
import SkillTag from '../../components/SkillTag/SkillTag';
import styles from './CandidatePage.module.css';

export default function CandidatePage() {
  const {
    fields, errors, skills, skillInput, resumeLink,
    submitted, loading,
    handleChange, handleSkillKeyDown, removeSkill,
    setSkillInput, handleResumeLinkChange, handleSubmit, handleReset,
  } = useCandidateController();

  return (
    <>
      <Navbar showBack={true} />

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.badge}>Candidate Portal</div>
        <h1>Your Next Career Chapter<br />Starts Here</h1>
        <p>Submit your profile and let leading employers discover your talent. Fast, simple, no login required.</p>
      </div>

      {/* Form */}
      <div className={styles.formSection}>
        <div className={styles.formWrap}>
          <div className={styles.formCard}>

            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>🎉</div>
                <h2>Application Submitted!</h2>
                <p>Your application has been submitted successfully. Our team will review your profile and be in touch soon.</p>
                <button className={styles.resetBtn} onClick={handleReset}>Submit Another Application</button>
              </div>
            ) : (
              <>
                <h2 className={styles.formTitle}>Submit Your Application</h2>
                <p className={styles.formSub}>Fill in the form below and our team will match you with relevant opportunities.</p>

                <form onSubmit={handleSubmit} noValidate>

                  {/* Row 1: Name + Email */}
                  <div className={styles.row}>
                    <FormInput label="Full Name" name="name" value={fields.name} onChange={handleChange} placeholder="John Smith" error={errors.name} required />
                    <FormInput label="Email Address" name="email" type="email" value={fields.email} onChange={handleChange} placeholder="john@email.com" error={errors.email} required />
                  </div>

                  {/* Row 2: Contact + Location */}
                  <div className={styles.row}>
                    <FormInput label="Contact Number" name="phone" type="tel" value={fields.phone} onChange={handleChange} placeholder="+91 98765 43210" error={errors.phone} required />
                    <FormInput label="Location" name="location" value={fields.location} onChange={handleChange} placeholder="Mumbai, Maharashtra" error={errors.location} required />
                  </div>

                  {/* Row 3: Current Company + Current CTC */}
                  <div className={styles.row}>
                    <FormInput label="Current Company" name="currentCompany" value={fields.currentCompany} onChange={handleChange} placeholder="e.g. Infosys, TCS, Startup" error={errors.currentCompany} required />
                    <FormInput label="Current CTC" name="currentCTC" value={fields.currentCTC} onChange={handleChange} placeholder="e.g. 12 LPA, 18 LPA" error={errors.currentCTC} required />
                  </div>

                  {/* Skills */}
                  <div className={styles.group}>
                    <label className={styles.label}>Skills <span className={styles.req}>*</span></label>
                    <input
                      className={`${styles.control} ${errors.skills ? styles.inputError : ''}`}
                      type="text"
                      value={skillInput}
                      onChange={e => setSkillInput(e.target.value)}
                      onKeyDown={handleSkillKeyDown}
                      placeholder="Type a skill and press Enter (e.g. React, Python, Strategy)"
                    />
                    {errors.skills && <span className={styles.errMsg}>{errors.skills}</span>}
                    {skills.length > 0 && (
                      <div className={styles.skillTags}>
                        {skills.map(s => <SkillTag key={s} label={s} onRemove={removeSkill} />)}
                      </div>
                    )}
                  </div>

                  {/* Experience */}
                  <div className={styles.group}>
                    <label className={styles.label}>Years of Experience <span className={styles.req}>*</span></label>
                    <select
                      name="experience"
                      value={fields.experience}
                      onChange={handleChange}
                      className={`${styles.control} ${styles.select} ${errors.experience ? styles.inputError : ''}`}
                    >
                      {EXPERIENCE_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    {errors.experience && <span className={styles.errMsg}>{errors.experience}</span>}
                  </div>

                  {/* Resume Link */}
                  <div className={styles.group}>
                    <label className={styles.label}>Google Drive Resume Link <span className={styles.opt}>(Optional)</span></label>
                    <input
                      className={`${styles.control} ${errors.resumeLink ? styles.inputError : ''}`}
                      type="url"
                      name="resumeLink"
                      value={resumeLink}
                      onChange={handleResumeLinkChange}
                      placeholder="https://drive.google.com/file/d/..."
                    />
                    {errors.resumeLink && <span className={styles.errMsg}>{errors.resumeLink}</span>}
                    <small className={styles.helpText}>
                      Share your resume via Google Drive. Make sure the link is publicly accessible.
                    </small>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={loading}>
                    {loading ? 'Submitting…' : 'Submit →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
