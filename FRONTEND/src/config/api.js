const API_BASE = 'https://talentra-585s.onrender.com/api';

export const api = {
  API_BASE,
  health: () => fetch(`${API_BASE}/health`).then(r => r.json()),
  candidates: () => fetch(`${API_BASE}/candidates`).then(r => r.json()),
  recruiters: () => fetch(`${API_BASE}/recruiters`).then(r => r.json()),
  postCandidate: (data) => fetch(`${API_BASE}/candidates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  postRecruiter: (data) => fetch(`${API_BASE}/recruiters`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json())
};