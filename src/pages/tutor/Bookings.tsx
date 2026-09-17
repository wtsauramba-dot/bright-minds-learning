import React from 'react';
import { Calendar, Video, User, CheckCircle, ExternalLink } from 'lucide-react';
import { mockBookings } from '../../data/bookings';

export const TutorBookings: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
          Scheduled 1-on-1 Student Bookings
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Review upcoming face-to-face sessions and join Zoom meeting rooms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBookings.map((session) => (
          <div
            key={session.id}
            className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                Upcoming Session
              </span>
              <span className="text-xs font-semibold text-slate-400">{session.time}</span>
            </div>

            <div className="flex items-center gap-3">
              <img
                src={session.studentAvatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100'}
                alt={session.studentName}
                className="h-12 w-12 rounded-2xl object-cover ring-2 ring-indigo-900/10"
              />
              <div>
                <h3 className="text-base font-bold text-indigo-950">{session.studentName}</h3>
                <p className="text-xs text-indigo-600 font-semibold">{session.subject}</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-cream-50 border border-slate-100 flex items-center justify-between text-xs font-medium">
              <span className="flex items-center gap-1.5 text-slate-700">
                <Calendar className="h-4 w-4 text-amber-500" />
                {session.date}
              </span>
              <span className="text-indigo-900 font-bold">$45/hr Rate</span>
            </div>

            <a
              href={session.meetingUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-xs shadow flex items-center justify-center gap-2 transition-colors"
            >
              <Video className="h-4 w-4" />
              Start Zoom Session Room
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};
