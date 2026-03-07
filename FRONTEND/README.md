# 🚀 Talentra — React MVC Project

A professional recruitment platform built with **React + React Router** following a clean **MVC (Model-View-Controller)** architecture. Every concern is separated so you can change anything without touching unrelated code.

---

## 📁 Folder Structure

```
src/
├── models/               ← DATA & VALIDATION (no UI code here)
│   ├── candidateModel.js     Schema + validation rules for candidates
│   ├── recruiterModel.js     Schema + validation rules for employers
│   └── contentModel.js       ALL static text/copy for the site ✏️
│
├── controllers/          ← BUSINESS LOGIC (custom React hooks)
│   ├── candidateController.js    Form state, handlers, API calls
│   └── recruiterController.js    Contact form state & submission
│
├── routes/               ← URL ROUTING
│   └── AppRouter.jsx         Central route map — add pages here
│
├── views/                ← UI PAGES (use controllers + models)
│   ├── landing/
│   │   └── LandingPage.jsx       Role selector homepage
│   ├── employer/
│   │   ├── EmployerLayout.jsx    Navbar wrapper + nested routes
│   │   ├── Home/                 Hero + stats
│   │   ├── AboutUs/              About, Differentiators, Leadership
│   │   ├── OurExpertise/         Expertise cards
│   │   └── ContactUs/            Contact form (uses recruiterController)
│   └── candidate/
│       └── CandidatePage.jsx     Full candidate form (uses candidateController)
│
├── components/           ← REUSABLE UI PRIMITIVES
│   ├── Navbar/               Sticky nav with mobile hamburger
│   ├── Footer/               Site footer
│   ├── FormInput/            Labeled input with error display
│   ├── SkillTag/             Dismissible skill pill
│   ├── FileUpload/           Drag-and-drop CV uploader
│   ├── SectionHeader/        Section label + title + subtitle
│   ├── ExpertiseCard/        Hover card for expertise areas
│   ├── FounderCard/          Team member profile card
│   └── DiffItem/             Numbered differentiator row
│
└── styles/
    └── global.css            Reset + Google Fonts import
```

---

## 🏃 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start

# 3. Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✏️ How to Make Common Changes

### Change any text on the site
Open **`src/models/contentModel.js`** — ALL copy lives here:
- `COMPANY` → name, email, phone, address
- `ABOUT` → About Talentra paragraphs + Our Focus list
- `DIFFERENTIATORS` → What Makes Us Different items
- `FOUNDERS` → Leadership team bios
- `EXPERTISE_AREAS` → Expertise cards content
- `HERO_STATS` → Stats on the Home page

### Add a new employer tab
1. Create a new folder in `src/views/employer/YourPage/`
2. Add `YourPage.jsx` + `YourPage.module.css`
3. Add a `<Route>` in `src/views/employer/EmployerLayout.jsx`
4. Add a link to the `EMPLOYER_LINKS` array in the same file

### Add a new form field (Candidate)
1. Add the field to `CANDIDATE_SCHEMA` in `src/models/candidateModel.js`
2. Add a validation rule in `validateCandidate()`
3. Add the field to `fields` state in `src/controllers/candidateController.js`
4. Add a `<FormInput>` in `src/views/candidate/CandidatePage.jsx`

### Connect a real backend
In `candidateController.js` and `recruiterController.js`, replace the simulated `await new Promise(...)` block with your actual `fetch()` or `axios` API call.

---

## 🎨 Styling
Each component has its own **CSS Module** (`.module.css`) — styles are locally scoped and won't leak. Global styles (fonts, resets) are in `src/styles/global.css`.

---

## 📦 Tech Stack
| Technology | Role |
|---|---|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| CSS Modules | Scoped, maintainable styles |
| Custom Hooks | MVC Controller layer |
