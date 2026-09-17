import React from 'react';
import { FileText, Download, CheckCircle, Lock, ShieldCheck } from 'lucide-react';
import { mockResources } from '../../data/bookings';
import { useAuthStore } from '../../store/authStore';
import { ProtectedContent } from '../../components/ProtectedContent';

export const Resources: React.FC = () => {
  const { user } = useAuthStore();

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
            Downloadable Study Resources
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Access PDF notes, formula sheets, and past exam answer keys.
          </p>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
          <ShieldCheck className="h-4 w-4 text-amber-600" />
          <span>Subscriber Perks Active</span>
        </div>
      </div>

      <ProtectedContent
        fallbackTitle="🔒 Study Resources Locked"
        fallbackDescription="Subscribe to Bright Minds Premium to download unlimited PDF formula sheets, practice worksheets, and exam keys."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockResources.map((res) => (
            <div
              key={res.id}
              className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm flex items-start justify-between gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                    {res.subject} • {res.type}
                  </span>
                  <h3 className="text-sm font-bold text-indigo-950">{res.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">Course: {res.courseTitle}</p>
                  <p className="text-[11px] text-slate-400 mt-2">{res.size} • {res.uploadDate}</p>
                </div>
              </div>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Downloading ${res.title}... (Mock File Download)`);
                }}
                className="p-3 rounded-2xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs shadow shrink-0 flex items-center gap-1.5 transition-colors"
              >
                <Download className="h-4 w-4 text-amber-400" />
                Download
              </a>
            </div>
          ))}
        </div>
      </ProtectedContent>

    </div>
  );
};
