import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Zap, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const Pricing: React.FC = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, toggleSubscription } = useAuthStore();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const handleSelectPlan = () => {
    if (!isAuthenticated) {
      navigate('/signup');
    } else {
      if (!user?.isSubscribed) {
        toggleSubscription();
      }
      navigate('/student/dashboard');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-100/70 px-3.5 py-1.5 rounded-full">
          Transparent Pricing Plans
        </span>
        <h1 className="text-4xl font-extrabold text-indigo-950 font-poppins">
          Invest in Your Bright Future
        </h1>
        <p className="text-slate-600 text-base">
          Choose the plan that best fits your learning pace. Cancel or switch anytime.
        </p>

        {/* Toggle Switch */}
        <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-slate-200/70 mt-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-white text-indigo-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              billingCycle === 'annual'
                ? 'bg-amber-500 text-indigo-950 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Annual Billing
            <span className="px-1.5 py-0.5 rounded bg-indigo-950 text-amber-300 text-[10px] font-extrabold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        
        {/* Tier 1: Basic */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Basic Learner</h3>
            <p className="text-xs text-slate-500">Perfect for exploring single courses and sample previews.</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-slate-900">$0</span>
              <span className="text-xs text-slate-400">/ forever free</span>
            </div>
            <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Access to all course syllabus previews</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Free sample video lesson per course</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 line-through">
                <span>1-on-1 Live lesson booking discount</span>
              </li>
              <li className="flex items-center gap-2 text-slate-400 line-through">
                <span>Downloadable PDF cheat sheets</span>
              </li>
            </ul>
          </div>

          <Link
            to="/signup"
            className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors block"
          >
            Get Started Free
          </Link>
        </div>

        {/* Tier 2: Premium (Featured) */}
        <div className="relative rounded-3xl bg-gradient-to-b from-indigo-950 to-indigo-900 text-white p-8 shadow-2xl border-2 border-amber-500 flex flex-col justify-between space-y-6 scale-[1.03]">
          
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-500 text-indigo-950 font-extrabold text-xs shadow-md uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" />
            Most Popular Choice
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="text-xl font-bold text-white">Premium All-Access Pass</h3>
            <p className="text-xs text-indigo-200">Full unlimited access to all courses, videos, and study guides.</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-black text-amber-400">
                {billingCycle === 'monthly' ? '$29' : '$23'}
              </span>
              <span className="text-xs text-indigo-200">/ month</span>
            </div>
            <ul className="space-y-3 pt-4 border-t border-indigo-800/80 text-xs text-indigo-100">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-400 shrink-0" />
                <span><strong>Unlimited access</strong> to all 12+ pre-recorded video courses</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-400 shrink-0" />
                <span><strong>Instant download</strong> of all PDF notes & worksheets</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-400 shrink-0" />
                <span><strong>20% discount</strong> on 1-on-1 live tutor bookings</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-amber-400 shrink-0" />
                <span>Verified course completion certificates</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleSelectPlan}
            className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-sm text-center shadow-lg transition-all"
          >
            {user?.isSubscribed ? 'Active Plan (Manage)' : 'Subscribe to Premium'}
          </button>
        </div>

        {/* Tier 3: Tutor Unlimited */}
        <div className="rounded-3xl bg-white border border-slate-200/80 p-8 shadow-sm flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">1-on-1 Intensive</h3>
            <p className="text-xs text-slate-500">For students preparing for AP exams, SATs, or college admissions.</p>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-indigo-950">
                {billingCycle === 'monthly' ? '$89' : '$72'}
              </span>
              <span className="text-xs text-slate-400">/ month</span>
            </div>
            <ul className="space-y-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Everything in Premium Pass included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span><strong>2 Live 1-on-1 sessions per month</strong> included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>Priority tutor scheduling & chat support</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleSelectPlan}
            className="w-full py-3 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs text-center transition-colors"
          >
            Get 1-on-1 Plan
          </button>
        </div>

      </div>

    </div>
  );
};
