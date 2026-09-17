import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  LayoutDashboard, 
  BookOpen, 
  Video, 
  Calendar, 
  FileText, 
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const StudentLayout: React.FC = () => {
  const location = useLocation();
  const { user, toggleSubscription } = useAuthStore();

  const navItems = [
    { label: 'Overview', path: '/student/dashboard', icon: LayoutDashboard },
    { label: 'My Courses', path: '/student/my-courses', icon: BookOpen },
    { label: 'Live Sessions', path: '/student/live-sessions', icon: Calendar },
    { label: 'Recorded Tutorials', path: '/student/recorded-tutorials', icon: Video },
    { label: 'Study Resources', path: '/student/resources', icon: FileText },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream-50 font-sans">
      <Navbar />

      {/* Subscription Banner Bar */}
      <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white py-3 px-4 sm:px-6 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <ShieldCheck className="h-4 w-4 text-amber-400" />
            <span className="font-medium">
              Student Pass Status: <strong className="text-amber-300">{user?.planName || 'Active Premium Member'}</strong>
            </span>
            <span className="hidden md:inline-block text-indigo-300">
              ({user?.isSubscribed ? 'Unlimited Access Active' : 'Basic Tier'})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleSubscription}
              className="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold border border-amber-400/30 transition-colors flex items-center gap-1"
            >
              <Zap className="h-3.5 w-3.5" />
              Toggle Mock Auth Plan ({user?.isSubscribed ? 'Subscribed 🔒 unlocked' : 'Guest 🔒 locked'})
            </button>
          </div>
        </div>
      </div>

      {/* Main Student Sub-Navigation Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto py-3 no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-indigo-900 text-amber-400 shadow-md shadow-indigo-900/15'
                      : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dashboard Outlet Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
