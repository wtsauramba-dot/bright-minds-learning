import React, { useState } from 'react';
import { Video, Play, Clock, Star, Download, Lock } from 'lucide-react';
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { VideoPlayerModal } from '../../components/VideoPlayerModal';
import { Lesson } from '../../types';

export const RecordedTutorials: React.FC = () => {
  const { courses } = useCourseStore();
  const { user } = useAuthStore();
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const recordedCourses = courses.filter((c) => c.mode === 'Recorded');

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
          Pre-recorded Video Tutorial Library
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          On-demand video masterclasses with interactive lesson notes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recordedCourses.map((course) => (
          <div
            key={course.id}
            className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video bg-slate-900 group cursor-pointer" onClick={() => setSelectedLesson(course.lessons[0])}>
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform" />
                <div className="absolute inset-0 bg-indigo-950/30 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-amber-500 text-indigo-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 fill-indigo-950 ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-slate-900/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {course.duration}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block">
                  {course.subject}
                </span>
                <h3 className="text-base font-bold text-indigo-950 line-clamp-1">{course.title}</h3>
                <p className="text-xs text-slate-500 line-clamp-2">{course.description}</p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <button
                onClick={() => setSelectedLesson(course.lessons[0])}
                className="w-full py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs shadow transition-colors flex items-center justify-center gap-2"
              >
                <Play className="h-3.5 w-3.5 fill-white" />
                Watch First Lesson
              </button>
            </div>
          </div>
        ))}
      </div>

      <VideoPlayerModal
        lesson={selectedLesson}
        onClose={() => setSelectedLesson(null)}
      />

    </div>
  );
};
