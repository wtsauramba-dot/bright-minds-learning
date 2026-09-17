import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullScreen = false,
  message = 'Loading Bright Minds...'
}) => {
  const content = (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="relative flex items-center justify-center mb-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-900"></div>
        <GraduationCap className="absolute h-7 w-7 text-amber-500 animate-pulse" />
      </div>
      <p className="text-sm font-medium text-slate-600 tracking-wide">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream-50/90 backdrop-blur-sm">
        {content}
      </div>
    );
  }

  return content;
};
