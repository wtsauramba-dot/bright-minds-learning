import React from 'react';
import { X, Play, Download, CheckCircle, FileText } from 'lucide-react';
import { Lesson } from '../types';

interface VideoPlayerModalProps {
  lesson: Lesson | null;
  courseTitle?: string;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ lesson, courseTitle, onClose }) => {
  if (!lesson) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fadeIn">
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 shadow-2xl border border-slate-800 text-white overflow-hidden my-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
              {courseTitle || 'Pre-recorded Video Tutorial'}
            </span>
            <h3 className="text-lg font-bold text-white">{lesson.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {lesson.videoUrl ? (
            <video
              controls
              autoPlay
              className="w-full h-full object-contain"
              src={lesson.videoUrl}
            >
              Your browser does not support HTML5 video playback.
            </video>
          ) : (
            <div className="text-center p-8">
              <Play className="h-16 w-16 text-amber-400 mx-auto mb-3 animate-pulse" />
              <p className="text-sm font-semibold text-slate-300">Video Lesson Preview Active</p>
            </div>
          )}
        </div>

        {/* Lesson Metadata Footer */}
        <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-xs text-slate-400 max-w-xl">
              {lesson.description || 'Full HD lesson with interactive transcripts, code snippets, and instructor exercises.'}
            </p>
            <div className="mt-2 flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                Duration: {lesson.duration}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {lesson.pdfUrl && (
              <a
                href={lesson.pdfUrl}
                download
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-2 border border-slate-700"
              >
                <FileText className="h-4 w-4 text-amber-400" />
                Lesson Notes PDF
              </a>
            )}
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-indigo-950 text-xs font-bold transition-colors"
            >
              Done Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
