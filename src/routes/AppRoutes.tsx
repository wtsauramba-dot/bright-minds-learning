import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { StudentLayout } from '../layouts/StudentLayout';
import { TutorLayout } from '../layouts/TutorLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Public pages
import { Home } from '../pages/public/Home';
import { Courses } from '../pages/public/Courses';
import { CourseDetail } from '../pages/public/CourseDetail';
import { About } from '../pages/public/About';
import { Pricing } from '../pages/public/Pricing';

// Auth pages
import { Login } from '../pages/auth/Login';
import { Signup } from '../pages/auth/Signup';

// Student pages
import { StudentDashboard } from '../pages/student/Dashboard';
import { MyCourses } from '../pages/student/MyCourses';
import { LiveSessions } from '../pages/student/LiveSessions';
import { RecordedTutorials } from '../pages/student/RecordedTutorials';
import { Resources } from '../pages/student/Resources';

// Tutor pages
import { TutorDashboard } from '../pages/tutor/Dashboard';
import { TutorCourses } from '../pages/tutor/MyCourses';
import { AvailabilityManager } from '../pages/tutor/Availability';
import { TutorBookings } from '../pages/tutor/Bookings';
import { TutorEarnings } from '../pages/tutor/Earnings';

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner fullScreen />}>
      <Routes>
        
        {/* PUBLIC ROUTES */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* AUTH ROUTES */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* STUDENT PROTECTED ROUTES */}
        <Route element={<ProtectedRoute allowedRole="student" />}>
          <Route element={<StudentLayout />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/my-courses" element={<MyCourses />} />
            <Route path="/student/live-sessions" element={<LiveSessions />} />
            <Route path="/student/recorded-tutorials" element={<RecordedTutorials />} />
            <Route path="/student/resources" element={<Resources />} />
          </Route>
        </Route>

        {/* TUTOR PROTECTED ROUTES */}
        <Route element={<ProtectedRoute allowedRole="tutor" />}>
          <Route element={<TutorLayout />}>
            <Route path="/tutor/dashboard" element={<TutorDashboard />} />
            <Route path="/tutor/courses" element={<TutorCourses />} />
            <Route path="/tutor/availability" element={<AvailabilityManager />} />
            <Route path="/tutor/bookings" element={<TutorBookings />} />
            <Route path="/tutor/earnings" element={<TutorEarnings />} />
          </Route>
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </Suspense>
  );
};
