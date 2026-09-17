import { create } from 'zustand';
import { Course } from '../types';
import { mockCourses } from '../data/courses';

interface AvailabilitySlot {
  day: string;
  hour: number;
  available: boolean;
}

interface CourseState {
  courses: Course[];
  enrolledCourseIds: string[];
  availability: Record<string, number[]>; // dayKey -> array of available hours (e.g. { 'Mon': [9, 10, 14, 15] })
  
  // Actions
  addCourse: (courseData: Omit<Course, 'id' | 'rating' | 'reviewsCount'>) => Course;
  updateCourse: (id: string, updates: Partial<Course>) => void;
  deleteCourse: (id: string) => void;
  toggleSlot: (day: string, hour: number) => void;
  enrollCourse: (courseId: string) => void;
}

const defaultAvailability: Record<string, number[]> = {
  'Mon': [9, 10, 11, 14, 15, 16],
  'Tue': [10, 11, 13, 14, 15],
  'Wed': [9, 10, 11, 14, 15, 16],
  'Thu': [10, 11, 14, 15, 16, 17],
  'Fri': [9, 10, 11, 13, 14],
  'Sat': [10, 11, 12],
  'Sun': []
};

const COURSES_STORAGE_KEY = 'brightminds_courses';
const ENROLLED_STORAGE_KEY = 'brightminds_enrolled';

const getInitialCourses = (): Course[] => {
  try {
    const saved = localStorage.getItem(COURSES_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error(e);
  }
  return mockCourses;
};

const getInitialEnrolled = (): string[] => {
  try {
    const saved = localStorage.getItem(ENROLLED_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error(e);
  }
  return ['course-1', 'course-2', 'course-5']; // Default enrolled courses for demo
};

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: getInitialCourses(),
  enrolledCourseIds: getInitialEnrolled(),
  availability: defaultAvailability,

  addCourse: (courseData) => {
    const newCourse: Course = {
      ...courseData,
      id: `course-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 1,
      enrolledStudentsCount: 1
    };

    const updatedCourses = [newCourse, ...get().courses];
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(updatedCourses));
    set({ courses: updatedCourses });
    return newCourse;
  },

  updateCourse: (id, updates) => {
    const updatedCourses = get().courses.map(c => c.id === id ? { ...c, ...updates } : c);
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(updatedCourses));
    set({ courses: updatedCourses });
  },

  deleteCourse: (id) => {
    const updatedCourses = get().courses.filter(c => c.id !== id);
    localStorage.setItem(COURSES_STORAGE_KEY, JSON.stringify(updatedCourses));
    set({ courses: updatedCourses });
  },

  toggleSlot: (day, hour) => {
    const current = get().availability[day] || [];
    const exists = current.includes(hour);
    const updated = exists ? current.filter(h => h !== hour) : [...current, hour].sort((a, b) => a - b);
    
    set({
      availability: {
        ...get().availability,
        [day]: updated
      }
    });
  },

  enrollCourse: (courseId) => {
    const current = get().enrolledCourseIds;
    if (!current.includes(courseId)) {
      const updated = [...current, courseId];
      localStorage.setItem(ENROLLED_STORAGE_KEY, JSON.stringify(updated));
      set({ enrolledCourseIds: updated });
    }
  }
}));
