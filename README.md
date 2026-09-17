# 🎓 Bright Minds Learning — Front-End UI/UX Prototype

> *"Shaping brighter futures, one lesson at a time."*

Bright Minds Learning is a front-end prototype for an online education platform offering **1-on-1 Live Online Lessons** and **Pre-recorded Video Tutorials**. Built with React 18, Vite, TypeScript, Tailwind CSS, Zustand, and React Router v6.

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Launch

```bash
# 1. Install dependencies
npm install

# 2. Launch Vite development server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 🔑 Demo Credentials

You can log in instantly using the demo buttons on `/login` or `/signup`, or use the following credentials:

| Role | Email | Password | Features Unlocked |
| :--- | :--- | :--- | :--- |
| 🎓 **Student** | `student@demo.com` | `password` | Subscribed Premium pass, access to locked course video playback & downloadable study PDFs |
| 👨‍🏫 **Tutor** | `tutor@demo.com` | `password` | Verified faculty portal, Course CRUD modal, weekly 1-on-1 availability matrix, Recharts earnings chart |
| 🌐 **Guest** | *(None)* | *(None)* | Public browsing across 12 demo courses & syllabus previews with gated 🔒 blurred lock overlays |

---

## 📁 Project Architecture & Folder Structure

```
src/
 ├─ components/
 │   ├─ Navbar.tsx           # Dynamic navbar (Guest / Student / Tutor modes)
 │   ├─ Footer.tsx           # Responsive brand footer
 │   ├─ CourseCard.tsx       # Course card with level, mode, and lock indicators
 │   ├─ TutorCard.tsx        # Faculty card with 1-on-1 rate & booking CTA
 │   ├─ ProtectedContent.tsx # Gated wrapper displaying soft blur + lock overlay
 │   ├─ LoadingSpinner.tsx   # Global animated loader component
 │   ├─ AddCourseModal.tsx   # Modal form for tutors to publish new courses
 │   └─ VideoPlayerModal.tsx # Full HD sample video player modal
 ├─ pages/
 │   ├─ public/              # Home, Courses catalog, CourseDetail, About, Pricing
 │   ├─ auth/                # Signup with Step 1 Role Selector & Login with Role Toggle
 │   ├─ student/             # Student Dashboard, My Courses, Live Sessions, Tutorials, Resources
 │   └─ tutor/               # Educator Dashboard, Course CRUD, Availability Grid, Bookings, Earnings
 ├─ layouts/                 # PublicLayout, StudentLayout, TutorLayout
 ├─ data/                    # courses.ts (12 demo courses), tutors.ts, users.ts, bookings.ts
 ├─ store/                   # authStore.ts (Zustand + LocalStorage), courseStore.ts
 ├─ lib/                     # cms.ts (Headless CMS integration adapter)
 └─ routes/                  # AppRoutes.tsx & ProtectedRoute.tsx guards
```

---

## 🔌 Swapping Mock Data for a Headless CMS (Strapi / Sanity / Contentful)

The application is structured to easily replace mock data with live Headless CMS APIs:

1. Open **`/src/lib/cms.ts`**.
2. Configure your environment variables in `.env`:
   ```env
   VITE_CMS_TYPE=strapi       # Options: 'strapi' | 'sanity' | 'contentful' | 'mock'
   VITE_CMS_API_URL=https://your-cms-domain.com/api
   VITE_CMS_API_TOKEN=your_jwt_or_api_token
   ```
3. Use `fetchCoursesFromCMS()` and `fetchTutorsFromCMS()` from `/src/lib/cms.ts` inside your components or stores. The provided helper functions map Strapi/Sanity payload schemas directly into the application's TypeScript `Course` and `Tutor` types.

---

## 🎨 Design System & Palette

- **Deep Indigo**: `#312E81` (`bg-indigo-900`)
- **Warm Amber**: `#F59E0B` (`bg-amber-500`)
- **Soft Cream**: `#FEF9F3` (`bg-cream-50`)
- **Slate Gray**: `#1E293B`, `#475569`, `#94A3B8`
- **Typography**: Inter & Poppins Google Fonts
