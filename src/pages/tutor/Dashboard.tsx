import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Star, 
  BadgeCheck, 
  Plus, 
  Calendar, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCourseStore } from '../../store/courseStore';
import { AddCourseModal } from '../../components/AddCourseModal';
import { mockBookings } from '../../data/bookings';

export const TutorDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const { courses } = useCourseStore();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Filter courses created by tutor
  const tutorCourses = courses.filter((c) => c.tutorId === user?.id || c.tutorName.includes('Vance'));

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Educator Header Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
              <BadgeCheck className="h-4 w-4 text-amber-400" />
              <span>Verified Bright Minds Faculty</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-poppins">
              Welcome Back, {user?.name || 'Dr. Marcus Vance'}! 👨‍🏫
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-xl">
              Here is your teaching portal overview. Manage course offerings, update weekly availability, and view student bookings.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-xs shadow-lg flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Plus className="h-4 w-4" />
              ＋ Add New Course
            </button>
          </div>
        </div>
      </div>

      {/* Educator Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Stat 1: Total Students */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-900 flex items-center justify-center shrink-0">
            <Users className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Total Students</span>
            <h3 className="text-2xl font-black text-indigo-950">320+</h3>
            <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
              <TrendingUp className="h-3 w-3" /> +14 this month
            </span>
          </div>
        </div>

        {/* Stat 2: Active Courses */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <BookOpen className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Active Courses</span>
            <h3 className="text-2xl font-black text-indigo-950">{tutorCourses.length}</h3>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Published & Live</span>
          </div>
        </div>

        {/* Stat 3: Monthly Earnings */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <DollarSign className="h-7 w-7" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Monthly Revenue</span>
            <h3 className="text-2xl font-black text-indigo-950">$5,120</h3>
            <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 mt-0.5">
              <TrendingUp className="h-3 w-3" /> +18% vs last mo.
            </span>
          </div>
        </div>

        {/* Stat 4: Avg Rating */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
            <Star className="h-7 w-7 fill-amber-400" />
          </div>
          <div>
            <span className="text-xs text-slate-500 font-medium">Instructor Rating</span>
            <h3 className="text-2xl font-black text-indigo-950">4.95 / 5</h3>
            <span className="text-[11px] text-slate-400 mt-0.5 block">Based on 142 reviews</span>
          </div>
        </div>

      </div>

      {/* Section Grid: Created Courses & Upcoming Bookings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: My Created Courses */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-indigo-950 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-900" />
              Published Courses ({tutorCourses.length})
            </h3>
            <Link to="/tutor/courses" className="text-xs font-bold text-indigo-600 hover:underline">
              Manage All
            </Link>
          </div>

          <div className="space-y-3">
            {tutorCourses.map((c) => (
              <div
                key={c.id}
                className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <img src={c.thumbnail} alt={c.title} className="h-12 w-14 rounded-xl object-cover" />
                  <div>
                    <h4 className="text-sm font-bold text-indigo-950 line-clamp-1">{c.title}</h4>
                    <span className="text-xs text-slate-500">{c.subject} • {c.mode}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-sm font-black text-indigo-950 block">${c.price}</span>
                  <span className="text-[11px] text-emerald-600 font-bold">{c.enrolledStudentsCount || 85} Students</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Upcoming Student Bookings */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-indigo-950 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-500" />
              Student 1-on-1 Bookings
            </h3>
            <Link to="/tutor/bookings" className="text-xs font-bold text-indigo-600 hover:underline">
              View All
            </Link>
          </div>

          <div className="space-y-3">
            {mockBookings.map((b) => (
              <div
                key={b.id}
                className="rounded-2xl bg-white border border-slate-200/80 p-4 shadow-sm space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-950">{b.studentName}</span>
                  <span className="text-[11px] font-semibold text-amber-600">{b.date}</span>
                </div>
                <p className="text-xs text-slate-500">{b.subject}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Add Course Modal */}
      <AddCourseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

    </div>
  );
};
