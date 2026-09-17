import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

interface ProtectedContentProps {
  children: React.ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
}

export const ProtectedContent: React.FC<ProtectedContentProps> = ({
  children,
  fallbackTitle = 'Subscriber Exclusive Content',
  fallbackDescription = 'Sign up & subscribe to unlock complete video lessons, downloadable study notes, and 1-on-1 tutor access.'
}) => {
  const { user, isAuthenticated } = useAuthStore();

  // Content is unlocked if user is a logged-in subscribed student or a tutor
  const isUnlocked = isAuthenticated && user && (user.isSubscribed || user.role === 'tutor');

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
      {/* Blurred background preview of the locked content */}
      <div className="filter blur-[6px] select-none pointer-events-none opacity-40 p-4 transition-all">
        {children}
      </div>

      {/* Lock Overlay Modal */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-indigo-950/70 backdrop-blur-md p-6 text-center text-white animate-fadeIn">
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 ring-8 ring-amber-500/10">
          <Lock className="h-7 w-7" />
        </div>

        <h3 className="text-xl font-bold text-white mb-2">{fallbackTitle}</h3>
        <p className="text-sm text-indigo-100 max-w-md mb-6 leading-relaxed">
          {fallbackDescription}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs justify-center">
          {!isAuthenticated ? (
            <>
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
              >
                <Sparkles className="h-4 w-4" />
                Sign Up & Unlock
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/20 transition-colors border border-white/20"
              >
                Log In
              </Link>
            </>
          ) : (
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-2.5 text-sm font-semibold text-indigo-950 hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/25"
            >
              <ShieldCheck className="h-4 w-4" />
              Upgrade to Premium
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
