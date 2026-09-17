import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  User as UserIcon, 
  LogOut, 
  Menu, 
  X, 
  Sparkles,
  LayoutDashboard,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout, toggleSubscription } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-2xl bg-indigo-900 flex items-center justify-center text-amber-400 shadow-md shadow-indigo-900/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-indigo-950 tracking-tight font-poppins block leading-none">
                Bright Minds
              </span>
              <span className="text-[11px] font-semibold text-amber-600 tracking-wider uppercase block mt-1">
                Learning
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {!isAuthenticated ? (
              // GUEST NAV LINKS
              <>
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive('/') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/courses"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive('/courses') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  Courses
                </Link>
                <Link
                  to="/about"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive('/about') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive('/pricing') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  Pricing
                </Link>
              </>
            ) : user?.role === 'student' ? (
              // STUDENT NAV LINKS
              <>
                <Link
                  to="/student/dashboard"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive('/student/dashboard') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/courses"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive('/courses') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  Browse Courses
                </Link>
                <Link
                  to="/student/my-courses"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive('/student/my-courses') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  My Learning
                </Link>
              </>
            ) : (
              // TUTOR NAV LINKS
              <>
                <Link
                  to="/tutor/dashboard"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive('/tutor/dashboard') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  to="/tutor/courses"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive('/tutor/courses') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  My Courses
                </Link>
                <Link
                  to="/tutor/availability"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive('/tutor/availability') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  <Calendar className="h-4 w-4" />
                  Availability
                </Link>
                <Link
                  to="/tutor/earnings"
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive('/tutor/earnings') ? 'bg-indigo-50 text-indigo-900 font-semibold' : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
                  }`}
                >
                  <DollarSign className="h-4 w-4" />
                  Earnings
                </Link>
              </>
            )}
          </div>

          {/* Desktop Right CTA / User Dropdown */}
          <div className="hidden md:flex items-center gap-3">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold text-indigo-900 hover:bg-indigo-50 transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-amber-500 text-indigo-950 hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20 flex items-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  Sign Up
                </Link>
              </>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-3 p-1.5 pl-3 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-slate-100 transition-colors"
                >
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-800 block line-clamp-1">{user?.name}</span>
                    <span className="text-[10px] font-semibold text-indigo-600 uppercase tracking-wider block">
                      {user?.role}
                    </span>
                  </div>
                  <img
                    src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'}
                    alt={user?.name}
                    className="h-9 w-9 rounded-xl object-cover ring-2 ring-indigo-900/20"
                  />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-xs text-slate-500 font-medium">Signed in as</p>
                      <p className="text-sm font-bold text-slate-900 truncate">{user?.email}</p>
                      
                      {user?.role === 'student' && (
                        <div className="mt-2 flex items-center justify-between bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/60">
                          <span className="text-xs font-semibold text-amber-900 flex items-center gap-1">
                            <ShieldCheck className="h-3.5 w-3.5 text-amber-600" />
                            {user.isSubscribed ? 'Subscribed' : 'Free Tier'}
                          </span>
                          <button
                            onClick={toggleSubscription}
                            className="text-[11px] font-bold text-indigo-900 underline hover:text-indigo-700"
                          >
                            Toggle
                          </button>
                        </div>
                      )}
                    </div>

                    <Link
                      to={user?.role === 'student' ? '/student/dashboard' : '/tutor/dashboard'}
                      onClick={() => setIsProfileMenuOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <UserIcon className="h-4 w-4 text-slate-400" />
                      Dashboard Profile
                    </Link>

                    {user?.role === 'student' && (
                      <Link
                        to="/pricing"
                        onClick={() => setIsProfileMenuOpen(false)}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-amber-700 hover:bg-amber-50 transition-colors"
                      >
                        <Zap className="h-4 w-4 text-amber-500" />
                        Subscription Plans
                      </Link>
                    )}

                    <div className="border-t border-slate-100 my-1"></div>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-rose-600 hover:bg-rose-50 transition-colors text-left"
                    >
                      <LogOut className="h-4 w-4" />
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {!isAuthenticated ? (
            <>
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Courses
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                About
              </Link>
              <Link
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Pricing
              </Link>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl font-semibold border border-indigo-900/20 text-indigo-900"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 rounded-xl font-semibold bg-amber-500 text-indigo-950 shadow"
                >
                  Sign Up
                </Link>
              </div>
            </>
          ) : user?.role === 'student' ? (
            <>
              <Link
                to="/student/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Browse Courses
              </Link>
              <Link
                to="/student/my-courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                My Learning
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl font-semibold text-rose-600 hover:bg-rose-50"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/tutor/dashboard"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Tutor Dashboard
              </Link>
              <Link
                to="/tutor/courses"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                My Courses
              </Link>
              <Link
                to="/tutor/availability"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Availability
              </Link>
              <Link
                to="/tutor/earnings"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2.5 rounded-xl font-medium text-slate-700 hover:bg-slate-50"
              >
                Earnings
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl font-semibold text-rose-600 hover:bg-rose-50"
              >
                Log Out
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
