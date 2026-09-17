import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, BookOpen, Lock, Sparkles, X, Check } from 'lucide-react';
import { CourseCard } from '../../components/CourseCard';
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';

export const Courses: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { courses } = useCourseStore();
  const { user, isAuthenticated } = useAuthStore();
  const isSubscribed = isAuthenticated && user && (user.isSubscribed || user.role === 'tutor');

  // Filter state initialized from URL search params if present
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedSubject, setSelectedSubject] = useState(searchParams.get('subject') || 'All');
  const [selectedLevel, setSelectedLevel] = useState(searchParams.get('level') || 'All');
  const [selectedMode, setSelectedMode] = useState(searchParams.get('mode') || 'All');
  const [maxPrice, setMaxPrice] = useState<number>(100);

  const subjects = ['All', 'Mathematics', 'Computer Science', 'English & Writing', 'Chemistry & Biology', 'Science', 'Test Prep', 'Languages'];
  const levels = ['All', 'Primary', 'High School', 'College'];
  const modes = ['All', 'Live', 'Recorded'];

  // Filtered course list calculation
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tutorName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSubject = selectedSubject === 'All' || course.subject === selectedSubject;
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesMode = selectedMode === 'All' || course.mode === selectedMode;
      const matchesPrice = course.price <= maxPrice;

      return matchesSearch && matchesSubject && matchesLevel && matchesMode && matchesPrice;
    });
  }, [courses, searchQuery, selectedSubject, selectedLevel, selectedMode, maxPrice]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedSubject('All');
    setSelectedLevel('All');
    setSelectedMode('All');
    setMaxPrice(100);
    setSearchParams({});
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-indigo-950 font-poppins">
            Explore Course Catalog
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Showing {filteredCourses.length} of {courses.length} courses across Mathematics, STEM, Humanities & Languages.
          </p>
        </div>

        {/* Guest Lock Notification Banner */}
        {!isSubscribed && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <Lock className="h-4 w-4 text-amber-600 shrink-0" />
            <span>Public Catalog View • Sign in & subscribe to unlock lesson downloads and full HD video access.</span>
          </div>
        )}
      </div>

      {/* Search & Main Filter Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Sidebar Filters */}
        <div className="lg:col-span-3 space-y-6 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm h-fit">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Filter className="h-4 w-4 text-indigo-900" />
              Filter Courses
            </h3>
            {(selectedSubject !== 'All' || selectedLevel !== 'All' || selectedMode !== 'All' || searchQuery !== '') && (
              <button
                onClick={resetFilters}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Reset
              </button>
            )}
          </div>

          {/* Mode Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Learning Mode
            </label>
            <div className="flex flex-wrap gap-2">
              {modes.map((m) => (
                <button
                  key={m}
                  onClick={() => setSelectedMode(m)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedMode === m
                      ? 'bg-indigo-900 text-amber-400 shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {m === 'Live' ? '🔴 1-on-1 Live' : m === 'Recorded' ? '📹 Recorded' : 'All Modes'}
                </button>
              ))}
            </div>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Subject Area
            </label>
            <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedSubject === sub
                      ? 'bg-indigo-50 text-indigo-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{sub}</span>
                  {selectedSubject === sub && <Check className="h-3.5 w-3.5 text-indigo-900" />}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Academic Level
            </label>
            <div className="space-y-1">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors flex items-center justify-between ${
                    selectedLevel === lvl
                      ? 'bg-indigo-50 text-indigo-900 font-bold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{lvl}</span>
                  {selectedLevel === lvl && <Check className="h-3.5 w-3.5 text-indigo-900" />}
                </button>
              ))}
            </div>
          </div>

          {/* Max Price Range */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Max Price:
              </label>
              <span className="text-sm font-extrabold text-indigo-950">${maxPrice}</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-indigo-900 cursor-pointer"
            />
          </div>

        </div>

        {/* Right Search Input & Course Grid */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search course title, topic, or tutor name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8 space-y-4">
              <BookOpen className="h-12 w-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No courses match your criteria</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try expanding your search query or resetting filters to see more learning options.
              </p>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 rounded-xl bg-indigo-900 text-white text-xs font-bold hover:bg-indigo-800"
              >
                Clear All Filters
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
