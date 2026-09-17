import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Video, Users, Lock, ChevronRight } from 'lucide-react';
import { Course } from '../types';
import { useAuthStore } from '../store/authStore';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { user, isAuthenticated } = useAuthStore();
  const isSubscribed = isAuthenticated && user && (user.isSubscribed || user.role === 'tutor');

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Thumbnail Header */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-100">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

        {/* Mode Badge (Live vs Recorded) */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
              course.mode === 'Live'
                ? 'bg-rose-500 text-white'
                : 'bg-indigo-900 text-white'
            }`}
          >
            {course.mode === 'Live' ? (
              <>
                <span className="h-2 w-2 rounded-full bg-white animate-ping"></span>
                1-on-1 Live
              </>
            ) : (
              <>
                <Video className="h-3.5 w-3.5 text-amber-400" />
                Pre-recorded
              </>
            )}
          </span>
        </div>

        {/* Level Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {course.level}
          </span>
        </div>

        {/* Lock Overlay Badge if non-subscribed */}
        {!isSubscribed && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-950/85 backdrop-blur-md text-amber-400 text-xs font-semibold shadow">
            <Lock className="h-3.5 w-3.5" />
            <span>Preview Only</span>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Subject & Rating */}
        <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-2">
          <span className="text-indigo-600 font-semibold uppercase tracking-wider text-[11px]">
            {course.subject}
          </span>
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span>{course.rating.toFixed(1)}</span>
            <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-900 transition-colors line-clamp-2 mb-3">
          {course.title}
        </h3>

        {/* Tutor info */}
        <div className="mt-auto flex items-center gap-2.5 py-2 border-t border-slate-100 mb-4">
          <img
            src={course.tutorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100'}
            alt={course.tutorName}
            className="h-7 w-7 rounded-full object-cover ring-1 ring-slate-200"
          />
          <span className="text-xs font-medium text-slate-600 truncate">
            {course.tutorName}
          </span>
        </div>

        {/* Bottom Details Footer */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {course.duration}
            </span>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block font-normal">Course Price</span>
            <span className="text-lg font-extrabold text-indigo-950">${course.price}</span>
          </div>
        </div>

        {/* Action Button Link */}
        <Link
          to={`/courses/${course.id}`}
          className="mt-4 w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-indigo-900 text-indigo-900 group-hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
        >
          {isSubscribed ? 'Access Course' : 'View Course & Syllabus'}
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
};
