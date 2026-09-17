import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  Video, 
  Calendar, 
  Users, 
  CheckCircle, 
  Star, 
  BookOpen, 
  Award, 
  ShieldCheck,
  Search,
  PlayCircle
} from 'lucide-react';
import { CourseCard } from '../../components/CourseCard';
import { TutorCard } from '../../components/TutorCard';
import { mockCourses } from '../../data/courses';
import { mockTutors } from '../../data/tutors';
import { Tutor } from '../../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookedTutorModal, setBookedTutorModal] = useState<Tutor | null>(null);

  const featuredCourses = mockCourses.slice(0, 6);
  const featuredTutors = mockTutors.slice(0, 4);

  const handleBookTutor = (tutor: Tutor) => {
    setBookedTutorModal(tutor);
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>Premier K-12 & University STEM Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-poppins">
                Learn Smarter with <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                  Bright Minds
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-indigo-100/90 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Shaping brighter futures, one lesson at a time. Connect with Ivy-League tutors for <strong>1-on-1 live sessions</strong> or master skills with top-rated <strong>pre-recorded tutorials</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/courses"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-extrabold text-base shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <BookOpen className="h-5 w-5" />
                  Browse All Courses
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/signup"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md flex items-center justify-center gap-2 transition-all"
                >
                  <Sparkles className="h-5 w-5 text-amber-400" />
                  Sign Up Free
                </Link>
              </div>

              {/* Social Proof Pills */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <span className="text-2xl font-black text-white block">10,000+</span>
                  <span className="text-xs text-indigo-200">Active Students</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-white block">98.4%</span>
                  <span className="text-xs text-indigo-200">Grade Improvement</span>
                </div>
                <div>
                  <span className="text-2xl font-black text-amber-400 block">4.9 / 5</span>
                  <span className="text-xs text-indigo-200">Average Rating</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-b from-white/15 to-white/5 p-4 border border-white/20 backdrop-blur-xl shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
                    alt="Bright Minds Interactive Learning"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-transparent"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Link
                      to="/courses/course-1"
                      className="h-16 w-16 rounded-full bg-amber-500/90 text-indigo-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
                    >
                      <PlayCircle className="h-10 w-10 fill-indigo-950 text-amber-400 ml-0.5" />
                    </Link>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-indigo-950/90 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-400 animate-ping"></div>
                      <span className="text-xs font-bold text-white">Live 1-on-1 Class in Progress</span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                      Math & Science
                    </span>
                  </div>
                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 rounded-2xl p-4 shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Verified Tutors</p>
                    <p className="text-[11px] text-slate-500">Top 1% Educators</p>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -top-6 -right-6 bg-indigo-900 text-white rounded-2xl p-4 shadow-xl border border-indigo-700 hidden sm:flex items-center gap-3">
                  <Star className="h-6 w-6 text-amber-400 fill-amber-400" />
                  <div>
                    <p className="text-xs font-bold">4.9/5 Rating</p>
                    <p className="text-[11px] text-indigo-200">2,400+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/70 px-3.5 py-1.5 rounded-full">
            Simple 3-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-950 mt-3 font-poppins">
            How Bright Minds Works
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Start expanding your knowledge in under 2 minutes with flexible, tailored learning paths.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Step 1 */}
          <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all">
            <div className="h-16 w-16 rounded-2xl bg-indigo-900 text-amber-400 flex items-center justify-center text-2xl font-black mb-6 shadow-md shadow-indigo-900/20">
              1
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Create Your Account</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sign up as a student or tutor in seconds. Choose your learning objectives and skill level.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all">
            <div className="h-16 w-16 rounded-2xl bg-amber-500 text-indigo-950 flex items-center justify-center text-2xl font-black mb-6 shadow-md shadow-amber-500/20">
              2
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Select Course or Tutor</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Browse our catalog of 1-on-1 live interactive sessions or instant access pre-recorded video modules.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all">
            <div className="h-16 w-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl font-black mb-6 shadow-md shadow-emerald-600/20">
              3
            </div>
            <h3 className="text-xl font-bold text-indigo-950 mb-2">Start Learning & Excelling</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Join live rooms, complete practice problem sets, download study notes, and watch grades soar.
            </p>
          </div>

        </div>
      </section>

      {/* TWO LEARNING MODES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-indigo-950 text-white p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-2xl border border-indigo-900">
          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Flexible Formats
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 font-poppins">
              Two Powerful Ways to Learn
            </h2>
            <p className="text-indigo-200 text-base mt-2">
              Whether you need live personal guidance or self-paced video lessons, Bright Minds provides both.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            
            {/* Mode 1 Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 border border-white/15 hover:border-amber-400/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center">
                    <Users className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-rose-300 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
                    Live & Interactive
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">1-on-1 Live Online Lessons</h3>
                <p className="text-sm text-indigo-100/80 leading-relaxed mb-6">
                  Schedule direct face-to-face video sessions with expert tutors. Receive instant feedback, customized problem solving, and exam strategy tailored to your exact pacing.
                </p>
                <ul className="space-y-2.5 text-xs text-indigo-200 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    Flexible weekly scheduling matrix
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    Screen sharing & interactive virtual whiteboard
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    Direct Q&A with top university graduates
                  </li>
                </ul>
              </div>

              <Link
                to="/courses?mode=Live"
                className="w-full py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-bold text-sm text-center transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Book a Live Session
              </Link>
            </div>

            {/* Mode 2 Card */}
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 border border-white/15 hover:border-amber-400/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                    <Video className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30">
                    Self-Paced Access
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Pre-recorded Video Tutorials</h3>
                <p className="text-sm text-indigo-100/80 leading-relaxed mb-6">
                  Watch structured, HD video courses anytime, anywhere. Pause, rewind, and re-watch complex explanations alongside downloadable cheat sheets and practice worksheets.
                </p>
                <ul className="space-y-2.5 text-xs text-indigo-200 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    24/7 unlimited on-demand streaming
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    Downloadable PDF notes & answer keys
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-amber-400" />
                    Bite-sized modular breakdown
                  </li>
                </ul>
              </div>

              <Link
                to="/courses?mode=Recorded"
                className="w-full py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm text-center border border-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Video className="h-4 w-4 text-amber-400" />
                Watch Tutorials Anytime
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED COURSES CAROUSEL / GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/70 px-3.5 py-1.5 rounded-full">
              Handpicked Catalog
            </span>
            <h2 className="text-3xl font-extrabold text-indigo-950 mt-3 font-poppins">
              Featured Demo Courses
            </h2>
          </div>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-900 hover:text-indigo-700 group"
          >
            Explore All 12 Courses
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* FEATURED TUTORS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/70 px-3.5 py-1.5 rounded-full">
            Expert Instructors
          </span>
          <h2 className="text-3xl font-extrabold text-indigo-950 mt-3 font-poppins">
            Learn from Top Educators
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Every tutor undergoes rigorous background checks, subject interviews, and teaching auditions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} onBookClick={handleBookTutor} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-950 font-poppins">
              Loved by Students & Parents
            </h2>
            <p className="text-xs text-slate-500 mt-1">Real reviews from our learning community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-100 space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "Dr. Vance transformed my confidence in AP Calculus. Went from a C+ to an A in just 4 weeks of 1-on-1 tutoring!"
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Maya S.</p>
                  <p className="text-[10px] text-slate-500">High School Senior</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-100 space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "The pre-recorded Python course was so structured! Being able to download worksheet answer keys saved me tons of time."
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-slate-900">Jordan K.</p>
                  <p className="text-[10px] text-slate-500">Computer Science Freshman</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-100 space-y-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed italic">
                "Amara's SAT Math strategy helped my son score 780 on his SAT Math section. Best investment we ever made!"
              </p>
              <div className="pt-2 border-t border-slate-200/60 flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="h-8 w-8 rounded-full object-cover" />
                <div>
                  <p className="text-xs font-bold text-slate-900">David M.</p>
                  <p className="text-[10px] text-slate-500">Parent of High Schooler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TUTOR BOOKING MODAL SAMPLE */}
      {bookedTutorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="text-lg font-bold text-indigo-950">Book 1-on-1 Session</h3>
              <button onClick={() => setBookedTutorModal(null)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>
            <div className="mt-4 flex items-center gap-3 p-3 rounded-2xl bg-indigo-50">
              <img src={bookedTutorModal.photo} alt={bookedTutorModal.name} className="h-12 w-12 rounded-xl object-cover" />
              <div>
                <p className="text-sm font-bold text-indigo-950">{bookedTutorModal.name}</p>
                <p className="text-xs text-indigo-600 font-semibold">${bookedTutorModal.hourlyRate}/hr • {bookedTutorModal.subject}</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-4 leading-relaxed">
              Select a date and time slot. You will be redirected to complete booking and receive your Zoom link.
            </p>
            <div className="mt-4 space-y-2">
              <button
                onClick={() => {
                  setBookedTutorModal(null);
                  navigate('/signup');
                }}
                className="w-full py-3 rounded-xl bg-amber-500 text-indigo-950 font-bold text-xs shadow hover:bg-amber-400"
              >
                Sign Up & Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
