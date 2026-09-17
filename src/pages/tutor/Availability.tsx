import React, { useState } from 'react';
import { Calendar, Clock, Check, Save } from 'lucide-react';
import { useCourseStore } from '../../store/courseStore';

export const AvailabilityManager: React.FC = () => {
  const { availability, toggleSlot } = useCourseStore();
  const [savedMessage, setSavedMessage] = useState(false);

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const handleSave = () => {
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
            Weekly 1-on-1 Availability Matrix
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Click time slots to toggle open 1-on-1 tutoring sessions for prospective students.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-3 rounded-2xl bg-indigo-900 hover:bg-indigo-800 text-amber-400 font-extrabold text-xs shadow flex items-center gap-2 self-start transition-colors"
        >
          <Save className="h-4 w-4" />
          Save Weekly Matrix
        </button>
      </div>

      {savedMessage && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <Check className="h-4 w-4 text-emerald-600" />
          Availability slots updated successfully! Students will now see your open times.
        </div>
      )}

      {/* Calendar Grid Container */}
      <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm overflow-x-auto">
        <div className="min-w-[700px]">
          
          {/* Days Header */}
          <div className="grid grid-cols-8 gap-2 pb-4 border-b border-slate-200 text-center font-bold text-xs text-slate-700">
            <div className="text-slate-400 font-normal">Time (EST)</div>
            {days.map((d) => (
              <div key={d} className="p-2 rounded-xl bg-indigo-50 text-indigo-900 font-bold">
                {d}
              </div>
            ))}
          </div>

          {/* Time Slots Rows */}
          <div className="divide-y divide-slate-100 pt-2">
            {hours.map((hour) => {
              const displayHour = hour > 12 ? `${hour - 12}:00 PM` : hour === 12 ? '12:00 PM' : `${hour}:00 AM`;
              return (
                <div key={hour} className="grid grid-cols-8 gap-2 py-2 items-center text-center">
                  <span className="text-xs text-slate-500 font-semibold">{displayHour}</span>
                  {days.map((day) => {
                    const isAvailable = (availability[day] || []).includes(hour);
                    return (
                      <button
                        key={`${day}-${hour}`}
                        onClick={() => toggleSlot(day, hour)}
                        className={`h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                          isAvailable
                            ? 'bg-amber-500 text-indigo-950 shadow-sm border border-amber-400'
                            : 'bg-slate-100 text-slate-400 hover:bg-slate-200 border border-slate-200/60'
                        }`}
                      >
                        {isAvailable ? 'Open' : '-'}
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
};
