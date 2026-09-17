import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, UserCheck, BookOpen, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { UserRole } from '../../types';

export const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { register, loginAsDemoStudent, loginAsDemoTutor } = useAuthStore();

  const [step, setStep] = useState<1 | 2>(1);
  const [role, setRole] = useState<UserRole>('student');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    register(name, email, role);
    if (role === 'student') {
      navigate('/student/dashboard');
    } else {
      navigate('/tutor/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl rounded-3xl bg-white border border-slate-200/80 shadow-2xl p-6 sm:p-10 space-y-8 animate-fadeIn">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="h-12 w-12 rounded-2xl bg-indigo-900 text-amber-400 flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="h-7 w-7" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 font-poppins">
            Join Bright Minds Learning
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {step === 1 ? 'Step 1: Choose your account type to get started' : `Step 2: Enter details for your ${role === 'student' ? 'Learner' : 'Tutor'} account`}
          </p>
        </div>

        {/* STEP 1: ROLE SELECTOR */}
        {step === 1 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Option A: Learner */}
              <button
                type="button"
                onClick={() => handleRoleSelect('student')}
                className="group p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-500 hover:bg-amber-50/40 text-left transition-all flex flex-col justify-between space-y-4"
              >
                <div className="h-12 w-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 group-hover:text-amber-700">I'm a Learner</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Access 1-on-1 live tutoring, video masterclasses, and downloadable study guides.
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-amber-600 group-hover:translate-x-1 transition-transform">
                  Continue as Student <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </button>

              {/* Option B: Tutor */}
              <button
                type="button"
                onClick={() => handleRoleSelect('tutor')}
                className="group p-6 rounded-2xl border-2 border-slate-200 hover:border-indigo-900 hover:bg-indigo-50/40 text-left transition-all flex flex-col justify-between space-y-4"
              >
                <div className="h-12 w-12 rounded-xl bg-indigo-900/20 text-indigo-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <UserCheck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-950 group-hover:text-indigo-800">I'm a Tutor</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Publish courses, manage weekly 1-on-1 availability, and earn money teaching.
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-indigo-900 group-hover:translate-x-1 transition-transform">
                  Continue as Educator <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </button>

            </div>

            {/* Instant Demo Presets */}
            <div className="pt-4 border-t border-slate-100 text-center space-y-3">
              <span className="text-xs text-slate-400 font-medium block">— OR TRY DEMO INSTANT LOGIN —</span>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <button
                  type="button"
                  onClick={() => {
                    loginAsDemoStudent();
                    navigate('/student/dashboard');
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500/10 text-amber-800 text-xs font-bold hover:bg-amber-500/20 border border-amber-300/40"
                >
                  ⚡ Instant Demo Student Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    loginAsDemoTutor();
                    navigate('/tutor/dashboard');
                  }}
                  className="px-4 py-2 rounded-xl bg-indigo-900/10 text-indigo-900 text-xs font-bold hover:bg-indigo-900/20 border border-indigo-300/40"
                >
                  ⚡ Instant Demo Tutor Login
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* STEP 2: REGISTRATION FORM */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Johnson"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
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

            <div className="pt-2 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800"
              >
                ← Back to role selection
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-extrabold text-sm shadow-md"
              >
                Create Account & Sign In
              </button>
            </div>
          </form>
        )}

        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-indigo-900 hover:underline">
            Log In
          </Link>
        </div>

      </div>
    </div>
  );
};
