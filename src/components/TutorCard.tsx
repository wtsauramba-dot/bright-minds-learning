import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Award, BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onBookClick?: (tutor: Tutor) => void;
}

export const TutorCard: React.FC<TutorCardProps> = ({ tutor, onBookClick }) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      {/* Header Profile Photo */}
      <div className="relative h-56 w-full overflow-hidden bg-indigo-950">
        <img
          src={tutor.photo}
          alt={tutor.name}
          className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/20 to-transparent"></div>

        {/* Rating Pill */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-amber-600 font-extrabold text-xs shadow-md">
          <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
          <span>{tutor.rating.toFixed(2)}</span>
          <span className="text-slate-400 font-normal">({tutor.reviewCount})</span>
        </div>

        {/* Rate badge */}
        <div className="absolute bottom-3 left-4">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">1-on-1 Rate</span>
          <span className="text-xl font-black text-white">${tutor.hourlyRate}<span className="text-xs font-normal text-slate-300">/hr</span></span>
        </div>
      </div>

      {/* Body Details */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-indigo-950 group-hover:text-indigo-700 transition-colors">
          {tutor.name}
        </h3>
        <p className="text-xs font-semibold text-indigo-600 mb-2">
          {tutor.title}
        </p>

        <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
          {tutor.bio}
        </p>

        {/* Stats Row */}
        <div className="mt-auto grid grid-cols-2 gap-2 py-3 border-y border-slate-100 mb-4 text-xs">
          <div className="flex items-center gap-2 text-slate-600">
            <Award className="h-4 w-4 text-amber-500 shrink-0" />
            <span className="truncate">{tutor.totalStudents}+ Students</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <BookOpen className="h-4 w-4 text-indigo-600 shrink-0" />
            <span>{tutor.coursesCount} Courses</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2">
          <Link
            to={`/courses?tutor=${encodeURIComponent(tutor.name)}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-indigo-50 text-indigo-900 font-semibold text-xs hover:bg-indigo-100 transition-colors text-center"
          >
            View Courses
          </Link>
          <button
            onClick={() => onBookClick ? onBookClick(tutor) : null}
            className="flex-1 py-2.5 px-3 rounded-xl bg-amber-500 text-indigo-950 font-bold text-xs hover:bg-amber-400 transition-colors flex items-center justify-center gap-1 shadow-sm"
          >
            <Calendar className="h-3.5 w-3.5" />
            Book 1-on-1
          </button>
        </div>
      </div>
    </div>
  );
};
