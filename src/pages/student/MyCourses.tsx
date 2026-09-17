import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Play, CheckCircle, Clock, Star, Sparkles } from 'lucide-react';
import { useCourseStore } from '../../store/courseStore';
import { CourseCard } from '../../components/CourseCard';

export const MyCourses: React.FC = () => {
  const { courses, enrolledCourseIds } = useCourseStore();
  const enrolledCourses = courses.filter((c) => enrolledCourseIds.includes(c.id));

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
            My Learning Library
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track your progress across enrolled 1-on-1 and pre-recorded courses.
          </p>
        </div>

        <Link
          to="/courses"
          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-bold text-xs shadow flex items-center gap-1.5 self-start"
        >
          <Sparkles className="h-4 w-4" />
          Enroll in More Courses
        </Link>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enrolledCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};
