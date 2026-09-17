import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  DollarSign, 
  BadgeCheck, 
  Users,
  Plus
} from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const TutorLayout: React.FC = () => {
  const location = useLocation();
  const { user } = useAuthStore();

  const navItems = [
    { label: 'Tutor Overview', path: '/tutor/dashboard', icon: LayoutDashboard },
    { label: 'My Courses', path: '/tutor/courses', icon: BookOpen },
    { label: 'Availability Grid', path: '/tutor/availability', icon: Calendar },
    { label: 'Booked Sessions', path: '/tutor/bookings', icon: Users },
    { label: 'Earnings & Payouts', path: '/tutor/earnings', icon: DollarSign },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-cream-50 font-sans">
      <Navbar />

      {/* Educator Status Bar */}
      <div className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white py-3.5 px-4 sm:px-6 border-b border-indigo-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <BadgeCheck className="h-5 w-5 text-amber-400 shrink-0" />
            <span className="font-semibold">
              Verified Instructor Portal: <strong className="text-amber-300">{user?.name || 'Dr. Marcus Vance'}</strong>
            </span>
            <span className="hidden md:inline-block text-indigo-300 bg-indigo-900/60 px-2 py-0.5 rounded text-[11px]">
              Mathematics & Physics Lead
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-indigo-200">
            <span>Instructor Status: <strong className="text-emerald-400">Active • Accepting 1-on-1s</strong></span>
          </div>
        </div>
      </div>

      {/* Tutor Sub-Nav Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-3 overflow-x-auto py-3 no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-amber-500 text-indigo-950 shadow-md shadow-amber-500/20 font-bold'
                      : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-indigo-950' : 'text-slate-400'}`} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Tutor Dashboard Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
