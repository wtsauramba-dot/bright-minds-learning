import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Clock, 
  Video, 
  Users, 
  Lock, 
  CheckCircle, 
  FileText, 
  Download, 
  Play, 
  ArrowLeft,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { ProtectedContent } from '../../components/ProtectedContent';
import { VideoPlayerModal } from '../../components/VideoPlayerModal';
import { Lesson } from '../../types';

export const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { courses, enrollCourse } = useCourseStore();
  const { user, isAuthenticated } = useAuthStore();

  const [activeTab, setActiveTab] = useState<'overview' | 'syllabus' | 'tutor' | 'reviews'>('overview');
  const [selectedVideoLesson, setSelectedVideoLesson] = useState<Lesson | null>(null);

  const course = courses.find((c) => c.id === id) || courses[0];
  const isSubscribed = isAuthenticated && user && (user.isSubscribed || user.role === 'tutor');

  const handleEnrollClick = () => {
    if (!isAuthenticated) {
      navigate('/signup');
    } else {
      enrollCourse(course.id);
      navigate('/student/my-courses');
    }
  };

  return (
    <div className="pb-16">
      
      {/* Top Banner Hero */}
      <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white py-12 border-b border-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Course Catalog
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-indigo-950">
                  {course.mode === 'Live' ? '🔴 1-on-1 Live Online' : '📹 Pre-recorded Tutorial'}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200 border border-white/10">
                  {course.subject}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-indigo-200 border border-white/10">
                  {course.level}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-poppins">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-indigo-100/90 leading-relaxed max-w-3xl">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-indigo-200 font-medium">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Star className="h-4 w-4 fill-amber-400" />
                  <span>{course.rating.toFixed(1)}</span>
                  <span className="text-indigo-300 font-normal">({course.reviewsCount} reviews)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-indigo-300" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="h-4 w-4 text-indigo-300" />
                  <span>{course.enrolledStudentsCount || 120} Enrolled Students</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Content & Sticky Sidebar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Left Content Body */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Tabs Navigation */}
            <div className="flex border-b border-slate-200 space-x-4 sm:space-x-8">
              {(['overview', 'syllabus', 'tutor', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-sm font-bold capitalize transition-colors relative ${
                    activeTab === tab
                      ? 'text-indigo-900 border-b-2 border-indigo-900'
                      : 'text-slate-500 hover:text-indigo-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-8 animate-fadeIn">
                <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                  <h3 className="text-xl font-bold text-indigo-950">What You Will Learn</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Fundamental principles and step-by-step problem breakdown.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>High-frequency exam strategies & shortcut formulas.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>Downloadable worksheet exercises & answer guides.</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>1-on-1 Q&A support with verified educator.</span>
                    </div>
                  </div>
                </div>

                {/* Course Preview Video Unit */}
                <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-indigo-950">Free Sample Lesson Preview</h3>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      Public Preview Unlocked
                    </span>
                  </div>

                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 group">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-indigo-950/40 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedVideoLesson(course.lessons[0])}
                        className="h-16 w-16 rounded-full bg-amber-500 text-indigo-950 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                      >
                        <Play className="h-8 w-8 fill-indigo-950 ml-1" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-xl text-white text-xs flex justify-between items-center">
                      <span className="font-bold">{course.lessons[0]?.title || 'Lesson 1: Foundations'}</span>
                      <span className="text-amber-400">Click to Play Sample</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SYLLABUS & LESSON RESOURCES */}
            {activeTab === 'syllabus' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-indigo-950">Curriculum Syllabus ({course.lessons.length} Lessons)</h3>
                  <span className="text-xs text-slate-500">Total Duration: {course.duration}</span>
                </div>

                <div className="space-y-4">
                  {course.lessons.map((lesson, idx) => (
                    <div
                      key={lesson.id}
                      className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-sm space-y-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="h-7 w-7 rounded-xl bg-indigo-50 text-indigo-900 text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div>
                            <h4 className="text-base font-bold text-slate-900">{lesson.title}</h4>
                            <p className="text-xs text-slate-500 mt-0.5">{lesson.description}</p>
                          </div>
                        </div>

                        <span className="text-xs font-semibold text-slate-500 shrink-0">
                          {lesson.duration}
                        </span>
                      </div>

                      {/* Locked Content Guard for Lesson Actions */}
                      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                        {lesson.isPreview ? (
                          // Free Sample
                          <button
                            onClick={() => setSelectedVideoLesson(lesson)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition-colors"
                          >
                            <Play className="h-3.5 w-3.5 fill-emerald-700" />
                            Watch Free Preview
                          </button>
                        ) : (
                          // Gated Subscriber Lesson
                          <ProtectedContent
                            fallbackTitle="🔒 Lesson Resources Locked"
                            fallbackDescription="Join Bright Minds Premium to watch this full HD lesson & download study worksheets."
                          >
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setSelectedVideoLesson(lesson)}
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-900 text-white text-xs font-bold hover:bg-indigo-800 transition-colors"
                              >
                                <Play className="h-3.5 w-3.5 fill-white" />
                                Watch Full Lesson
                              </button>
                              {lesson.pdfUrl && (
                                <a
                                  href={lesson.pdfUrl}
                                  download
                                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors"
                                >
                                  <Download className="h-3.5 w-3.5 text-amber-500" />
                                  Download Notes PDF
                                </a>
                              )}
                            </div>
                          </ProtectedContent>
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: TUTOR */}
            {activeTab === 'tutor' && (
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 animate-fadeIn">
                <div className="flex items-start gap-5">
                  <img
                    src={course.tutorAvatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'}
                    alt={course.tutorName}
                    className="h-20 w-20 rounded-2xl object-cover ring-4 ring-indigo-50"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-indigo-950">{course.tutorName}</h3>
                    <p className="text-xs font-bold text-indigo-600">{course.subject} Instructor</p>
                    <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="h-4 w-4 fill-amber-400" />
                        4.95 Educator Rating
                      </span>
                      <span>300+ Students Mentored</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated educator with extensive experience in simplifying complex concepts. Passionate about empowering students with intuitive mental models, exam strategies, and individualized confidence building.
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">1-on-1 Rate: $45/hour</span>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-xl bg-amber-500 text-indigo-950 font-bold text-xs hover:bg-amber-400 transition-colors"
                  >
                    Book Private Session
                  </Link>
                </div>
              </div>
            )}

            {/* TAB 4: REVIEWS */}
            {activeTab === 'reviews' && (
              <div className="rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6 animate-fadeIn">
                <h3 className="text-xl font-bold text-indigo-950">Student Ratings & Reviews</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-cream-50 space-y-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic">
                      "Explanations are crystal clear. The step-by-step PDF notes helped me get a perfect score on my midterm."
                    </p>
                    <span className="text-[11px] font-bold text-slate-500 block">— Sarah T., Student</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-cream-50 space-y-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs text-slate-700 italic">
                      "Awesome learning pace. The 1-on-1 live session feedback was worth every penny."
                    </p>
                    <span className="text-[11px] font-bold text-slate-500 block">— Daniel R., Student</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Right Sticky Enrollment Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-3xl bg-white border border-slate-200/80 p-6 shadow-xl space-y-6">
              
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 mb-4">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Tuition Fee</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-indigo-950">${course.price}</span>
                  <span className="text-xs text-slate-500">or Included with Premium Pass</span>
                </div>
              </div>

              <button
                onClick={handleEnrollClick}
                className="w-full py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-extrabold text-base shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="h-5 w-5" />
                {isSubscribed ? 'Start Learning Now' : 'Enroll & Subscribe'}
              </button>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Full lifetime access to course recordings</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>All PDF study notes & worksheet downloads</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>Verified certificate of completion</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal
        lesson={selectedVideoLesson}
        courseTitle={course.title}
        onClose={() => setSelectedVideoLesson(null)}
      />

    </div>
  );
};
