// ─────────────────────────────────────────────────────────
// ROUTES: AppRouter.jsx
// Central routing config. Add new routes here.
// ─────────────────────────────────────────────────────────

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage      from '../views/landing/LandingPage';
import EmployerLayout   from '../views/employer/EmployerLayout';
import CandidatePage    from '../views/candidate/CandidatePage';

export default function AppRouter() {
  return (
    <Routes>
      {/* Landing — role selector */}
      <Route path="/"           element={<LandingPage />} />

      {/* Employer section — nested tabs handled inside layout */}
      <Route path="/employer/*" element={<EmployerLayout />} />

      {/* Candidate section */}
      <Route path="/candidate"  element={<CandidatePage />} />

      {/* Catch-all → home */}
      <Route path="*"           element={<Navigate to="/" replace />} />
    </Routes>
  );
}
