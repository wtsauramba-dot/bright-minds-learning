import React, { useState } from 'react';
import { Plus, Trash2, Edit3, BookOpen, Star, Video, Users } from 'lucide-react';
import { useCourseStore } from '../../store/courseStore';
import { useAuthStore } from '../../store/authStore';
import { AddCourseModal } from '../../components/AddCourseModal';

export const TutorCourses: React.FC = () => {
  const { courses, deleteCourse } = useCourseStore();
  const { user } = useAuthStore();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const tutorCourses = courses.filter((c) => c.tutorId === user?.id || c.tutorName.includes('Vance'));

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
            Manage Created Courses
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, or delete your published course curricula.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-indigo-950 font-black text-xs shadow flex items-center gap-2 self-start transition-transform hover:scale-105"
        >
          <Plus className="h-4 w-4" />
          ＋ Add New Course
        </button>
      </div>

      {/* Courses Table */}
      <div className="rounded-3xl bg-white border border-slate-200/80 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <tr>
                <th className="p-4 pl-6">Course Name</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Level & Mode</th>
                <th className="p-4">Tuition Fee</th>
                <th className="p-4">Students</th>
                <th className="p-4 text-right pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tutorCourses.map((course) => (
                <tr key={course.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 pl-6 flex items-center gap-3">
                    <img src={course.thumbnail} alt={course.title} className="h-10 w-14 rounded-lg object-cover shrink-0" />
                    <div>
                      <span className="font-bold text-indigo-950 block line-clamp-1">{course.title}</span>
                      <span className="text-[11px] text-slate-400 font-medium">ID: {course.id}</span>
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-slate-700">{course.subject}</td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-indigo-900">{course.level}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded w-fit ${course.mode === 'Live' ? 'bg-rose-100 text-rose-700' : 'bg-indigo-100 text-indigo-800'}`}>
                        {course.mode}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 font-black text-indigo-950">${course.price}</td>
                  <td className="p-4 font-bold text-emerald-600">{course.enrolledStudentsCount || 90}</td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => deleteCourse(course.id)}
                        className="p-2 rounded-xl text-rose-600 hover:bg-rose-50 transition-colors"
                        title="Delete Course"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddCourseModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />

    </div>
  );
};
