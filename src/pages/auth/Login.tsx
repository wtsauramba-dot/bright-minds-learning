import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, LogIn, Sparkles, User, UserCheck } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { UserRole } from '../../types';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, loginAsDemoStudent, loginAsDemoTutor } = useAuthStore();

  const [role, setRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    login(email, password, role);
    if (role === 'tutor' || email.includes('tutor')) {
      navigate('/tutor/dashboard');
    } else {
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200/80 shadow-2xl p-6 sm:p-10 space-y-6 animate-fadeIn">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="h-12 w-12 rounded-2xl bg-indigo-900 text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-extrabold text-indigo-950 font-poppins">
            Welcome Back
          </h2>
          <p className="text-xs text-slate-500">
            Sign in to access your Bright Minds learning portal
          </p>
        </div>

        {/* Role Toggle Header */}
        <div className="flex rounded-2xl bg-slate-100 p-1">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              role === 'student'
                ? 'bg-amber-500 text-indigo-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="h-3.5 w-3.5" />
            Student Login
          </button>
          <button
            type="button"
            onClick={() => setRole('tutor')}
            className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
              role === 'tutor'
                ? 'bg-indigo-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <UserCheck className="h-3.5 w-3.5" />
            Tutor Login
          </button>
        </div>

        {/* Quick Demo Credentials Autofill Banner */}
        <div className="p-3 rounded-2xl bg-indigo-50 border border-indigo-100 space-y-2 text-xs">
          <span className="font-bold text-indigo-900 block text-center">⚡ Quick One-Click Demo Access</span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                loginAsDemoStudent();
                navigate('/student/dashboard');
              }}
              className="py-2 px-2 rounded-xl bg-amber-500 text-indigo-950 font-extrabold text-[11px] shadow-sm hover:bg-amber-400 transition-colors text-center truncate"
            >
              Student Demo 🎓
            </button>
            <button
              type="button"
              onClick={() => {
                loginAsDemoTutor();
                navigate('/tutor/dashboard');
              }}
              className="py-2 px-2 rounded-xl bg-indigo-900 text-white font-extrabold text-[11px] shadow-sm hover:bg-indigo-800 transition-colors text-center truncate"
            >
              Tutor Demo 👨‍🏫
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={role === 'student' ? 'student@demo.com' : 'tutor@demo.com'}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
            />
          </div>

          <button
            type="submit"
            className={`w-full py-3.5 rounded-xl font-extrabold text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
              role === 'student'
                ? 'bg-amber-500 hover:bg-amber-400 text-indigo-950'
                : 'bg-indigo-900 hover:bg-indigo-800 text-white'
            }`}
          >
            <LogIn className="h-4 w-4" />
            Sign In as {role === 'student' ? 'Student' : 'Tutor'}
          </button>
        </form>

        <div className="pt-2 border-t border-slate-100 text-center text-xs text-slate-500">
          Don't have an account yet?{' '}
          <Link to="/signup" className="font-bold text-indigo-900 hover:underline">
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
};
