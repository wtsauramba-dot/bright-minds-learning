export type UserRole = 'student' | 'tutor';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isSubscribed: boolean;
  avatar?: string;
  planName?: string;
  renewalDate?: string;
  bio?: string;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  isPreview?: boolean;
  pdfUrl?: string;
  worksheetUrl?: string;
  description?: string;
}

export type CourseLevel = 'Primary' | 'High School' | 'College';
export type CourseMode = 'Live' | 'Recorded';

export interface Course {
  id: string;
  title: string;
  subject: string;
  level: CourseLevel;
  mode: CourseMode;
  price: number;
  tutorId: string;
  tutorName: string;
  tutorAvatar?: string;
  rating: number;
  reviewsCount: number;
  thumbnail: string;
  description: string;
  duration: string;
  lessonsCount: number;
  lessons: Lesson[];
  enrolledStudentsCount?: number;
  progress?: number; // for student dashboard
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  subject: string;
  bio: string;
  rating: number;
  reviewCount: number;
  photo: string;
  hourlyRate: number;
  totalStudents: number;
  coursesCount: number;
  education?: string;
}

export interface Booking {
  id: string;
  studentId: string;
  studentName: string;
  studentAvatar?: string;
  tutorId: string;
  tutorName: string;
  subject: string;
  date: string;
  time: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  meetingUrl: string;
  mode: string;
}

export interface LearningResource {
  id: string;
  title: string;
  courseTitle: string;
  subject: string;
  type: 'PDF Notes' | 'Worksheet' | 'Exam Guide' | 'Formula Sheet';
  size: string;
  downloadUrl: string;
  uploadDate: string;
}

export interface MonthlyEarning {
  month: string;
  earnings: number;
  sessions: number;
}
