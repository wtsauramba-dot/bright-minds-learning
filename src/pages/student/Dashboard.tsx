import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  BookOpen, 
  Calendar, 
  Video, 
  FileText, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  CheckCircle,
  Play
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useCourseStore } from '../../store/courseStore';
import { mockBookings, mockResources } from '../../data/bookings';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuthStore();
  const { courses, enrolledCourseIds } = useCourseStore();

  const enrolledCourses = courses.filter((c) => enrolledCourseIds.includes(c.id));
  const upcomingSessions = mockBookings.filter((b) => b.studentId === user?.id || b.studentName.includes('Alex'));

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Welcome Banner */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white p-8 shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Student Dashboard
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-poppins">
              Welcome back, {user?.name || 'Alex'}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-indigo-200 max-w-xl">
              Ready to continue your learning journey? You have {upcomingSessions.length} upcoming 1-on-1 live session and {enrolledCourses.length} active courses.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              to="/courses"
              className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-105"
            >
              <Sparkles className="h-4 w-4" />
              Browse More Courses
            </Link>
          </div>
        </div>
      </div>

      {/* Subscription Status Card */}
      <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-base font-bold text-slate-900">
                {user?.isSubscribed ? 'Active Premium Pass' : 'Basic Free Pass'}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {user?.isSubscribed
                ? `Renews on ${user.renewalDate || '12 June 2026'} • Unlimited HD Video & Worksheet Access`
                : 'Limited access mode. Upgrade to unlock all courses & resources.'}
            </p>
          </div>
        </div>

        <Link
          to="/pricing"
          className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 font-bold text-xs transition-colors self-start sm:self-center"
        >
          Manage Plan
        </Link>
      </div>

      {/* Quick Overview Grid: Enrolled Courses & Upcoming Sessions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Enrolled Courses */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-indigo-950 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-indigo-900" />
              Enrolled Courses & Progress
            </h3>
            <Link to="/student/my-courses" className="text-xs font-bold text-indigo-600 hover:underline">
              View All ({enrolledCourses.length})
            </Link>
          </div>

          <div className="space-y-4">
            {enrolledCourses.map((course) => {
              const progress = course.progress || Math.floor(Math.random() * 60) + 30;
              return (
                <div
                  key={course.id}
                  className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="h-16 w-20 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                        {course.subject} • {course.mode}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{course.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">Instructor: {course.tutorName}</p>
                    </div>
                  </div>

                  <div className="w-full sm:w-48 space-y-1.5 shrink-0">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-600">Progress</span>
                      <span className="text-indigo-900">{progress}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-900 hover:text-indigo-700 pt-1"
                    >
                      <Play className="h-3 w-3 fill-indigo-900" /> Continue Lesson
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Upcoming 1-on-1 Sessions */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-indigo-950 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-amber-500" />
              Upcoming 1-on-1s
            </h3>
            <Link to="/student/live-sessions" className="text-xs font-bold text-indigo-600 hover:underline">
              See All
            </Link>
          </div>

          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div
                key={session.id}
                className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 font-bold">
                    🔴 Live Zoom
                  </span>
                  <span className="text-slate-500 font-medium">{session.time}</span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-indigo-950">{session.subject}</h4>
                  <p className="text-xs text-slate-500">Tutor: {session.tutorName}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-600">{session.date}</span>
                  <a
                    href={session.meetingUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-indigo-900 text-white text-xs font-bold hover:bg-indigo-800 transition-colors"
                  >
                    Join Room
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
