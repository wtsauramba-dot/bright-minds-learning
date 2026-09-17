import React, { useState } from 'react';
import { X, Plus, Image as ImageIcon, Sparkles, BookOpen } from 'lucide-react';
import { useCourseStore } from '../store/courseStore';
import { useAuthStore } from '../store/authStore';
import { CourseLevel, CourseMode } from '../types';

interface AddCourseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCourseModal: React.FC<AddCourseModalProps> = ({ isOpen, onClose }) => {
  const { addCourse } = useCourseStore();
  const { user } = useAuthStore();

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('Mathematics');
  const [level, setLevel] = useState<CourseLevel>('High School');
  const [mode, setMode] = useState<CourseMode>('Live');
  const [price, setPrice] = useState('49');
  const [duration, setDuration] = useState('6 Weeks (12 Sessions)');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState(
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  );

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    addCourse({
      title,
      subject,
      level,
      mode,
      price: parseFloat(price) || 0,
      tutorId: user?.id || 'tutor-1',
      tutorName: user?.name || 'Dr. Marcus Vance',
      tutorAvatar: user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      thumbnail,
      description,
      duration,
      lessonsCount: 4,
      lessons: [
        {
          id: `l-${Date.now()}-1`,
          title: 'Lesson 1: Introduction & Foundation Concepts',
          duration: '45 mins',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isPreview: true,
          pdfUrl: '/resources/intro-notes.pdf'
        },
        {
          id: `l-${Date.now()}-2`,
          title: 'Lesson 2: Core Methods & Problem Solving',
          duration: '50 mins',
          videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
          isPreview: false,
          pdfUrl: '/resources/methods-notes.pdf'
        }
      ]
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-slate-100 p-6 md:p-8 my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-900">
              <BookOpen className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-indigo-950">Create New Course</h3>
              <p className="text-xs text-slate-500">Publish a new curriculum to Bright Minds students</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Course Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Master Calculus AB in 8 Weeks"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
            />
          </div>

          {/* Subject & Level Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Subject Area
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 bg-white"
              >
                <option value="Mathematics">Mathematics</option>
                <option value="Computer Science">Computer Science</option>
                <option value="English & Writing">English & Writing</option>
                <option value="Chemistry & Biology">Chemistry & Biology</option>
                <option value="Science">Science (General)</option>
                <option value="Test Prep">SAT & Test Prep</option>
                <option value="Languages">Languages</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Target Level
              </label>
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value as CourseLevel)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 bg-white"
              >
                <option value="Primary">Primary (Grades K-5)</option>
                <option value="High School">High School (Grades 6-12)</option>
                <option value="College">College / Adult</option>
              </select>
            </div>
          </div>

          {/* Mode & Price Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Learning Mode
              </label>
              <select
                value={mode}
                onChange={(e) => setMode(e.target.value as CourseMode)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900 bg-white font-semibold text-indigo-900"
              >
                <option value="Live">1-on-1 Live Online</option>
                <option value="Recorded">Pre-recorded Video</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Fee ($ USD)
              </label>
              <input
                type="number"
                min="0"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Duration / Format
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 6 Weeks"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Course Summary & Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe syllabus highlights, key outcomes, and prerequisites..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
            ></textarea>
          </div>

          {/* Thumbnail URL */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Thumbnail Image URL (or Unsplash sample)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-900/20 focus:border-indigo-900"
              />
              <button
                type="button"
                onClick={() => setThumbnail('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800')}
                className="px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold flex items-center gap-1.5"
              >
                <ImageIcon className="h-4 w-4" />
                Sample
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-sm shadow-md flex items-center gap-2 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Publish Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
