import React from 'react';
import { Calendar, Video, Clock, User, ExternalLink, ShieldCheck } from 'lucide-react';
import { mockBookings } from '../../data/bookings';

export const LiveSessions: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
          Upcoming 1-on-1 Live Sessions
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Your scheduled video appointments with expert tutors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockBookings.map((session) => (
          <div
            key={session.id}
            className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-rose-500 animate-ping"></span>
                {session.mode}
              </span>
              <span className="text-xs font-semibold text-slate-400">{session.time}</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-indigo-950">{session.subject}</h3>
              <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
                <User className="h-4 w-4 text-indigo-600" />
                <span>Instructor: <strong>{session.tutorName}</strong></span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-cream-50 border border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-indigo-950 font-semibold">
                <Calendar className="h-4 w-4 text-amber-500" />
                <span>{session.date}</span>
              </div>
              <span className="text-emerald-600 font-bold">Confirmed</span>
            </div>

            <a
              href={session.meetingUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs shadow flex items-center justify-center gap-2 transition-colors"
            >
              <Video className="h-4 w-4 text-amber-400" />
              Launch Zoom Meeting Room
              <ExternalLink className="h-3.5 w-3.5 opacity-70" />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
};
