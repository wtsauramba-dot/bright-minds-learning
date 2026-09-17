import { Booking, LearningResource, MonthlyEarning } from '../types';

export const mockBookings: Booking[] = [
  {
    id: 'book-1',
    studentId: 'user-student-1',
    studentName: 'Alex Johnson',
    studentAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    tutorId: 'tutor-1',
    tutorName: 'Dr. Marcus Vance',
    subject: '1-on-1 Algebra Quadratic Review',
    date: 'Tomorrow, 3:00 PM',
    time: '45 mins',
    status: 'Upcoming',
    meetingUrl: 'https://zoom.us/j/demo-brightminds-123',
    mode: '1-on-1 Live'
  },
  {
    id: 'book-2',
    studentId: 'user-student-1',
    studentName: 'Alex Johnson',
    studentAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    tutorId: 'tutor-5',
    tutorName: 'Amara Diop',
    subject: 'SAT Math Diagnostics Strategy',
    date: 'Friday, 5:30 PM',
    time: '60 mins',
    status: 'Upcoming',
    meetingUrl: 'https://zoom.us/j/demo-brightminds-456',
    mode: '1-on-1 Live'
  },
  {
    id: 'book-3',
    studentId: 'user-student-2',
    studentName: 'Sophia Martinez',
    studentAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    tutorId: 'user-tutor-1',
    tutorName: 'Dr. Marcus Vance',
    subject: 'Calculus Integration Techniques',
    date: 'Saturday, 10:00 AM',
    time: '60 mins',
    status: 'Upcoming',
    meetingUrl: 'https://zoom.us/j/demo-brightminds-789',
    mode: '1-on-1 Live'
  },
  {
    id: 'book-4',
    studentId: 'user-student-3',
    studentName: 'Ethan Wright',
    studentAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    tutorId: 'user-tutor-1',
    tutorName: 'Dr. Marcus Vance',
    subject: 'Linear Algebra Matrices',
    date: 'Monday, 4:00 PM',
    time: '45 mins',
    status: 'Upcoming',
    meetingUrl: 'https://zoom.us/j/demo-brightminds-101',
    mode: '1-on-1 Live'
  }
];

export const mockResources: LearningResource[] = [
  {
    id: 'res-1',
    title: 'Algebra 1 Complete Formula & Property Cheatsheet',
    courseTitle: 'Algebra Made Easy',
    subject: 'Mathematics',
    type: 'Formula Sheet',
    size: '2.4 MB',
    downloadUrl: '#',
    uploadDate: 'Updated 2 days ago'
  },
  {
    id: 'res-2',
    title: 'Python Data Structures & Methods Reference Guide',
    courseTitle: 'Intro to Python',
    subject: 'Computer Science',
    type: 'PDF Notes',
    size: '1.8 MB',
    downloadUrl: '#',
    uploadDate: 'Updated 1 week ago'
  },
  {
    id: 'res-3',
    title: 'IGCSE Physics Past Paper Solved Answer Keys (2021-2025)',
    courseTitle: 'IGCSE Physics',
    subject: 'Science',
    type: 'Exam Guide',
    size: '5.6 MB',
    downloadUrl: '#',
    uploadDate: 'Updated 3 days ago'
  },
  {
    id: 'res-4',
    title: 'SAT Math Top 50 High-Frequency Practice Problems',
    courseTitle: 'SAT Math Prep',
    subject: 'Test Prep',
    type: 'Worksheet',
    size: '3.1 MB',
    downloadUrl: '#',
    uploadDate: 'Updated yesterday'
  }
];

export const mockTutorEarnings: MonthlyEarning[] = [
  { month: 'Jan', earnings: 2400, sessions: 48 },
  { month: 'Feb', earnings: 2850, sessions: 54 },
  { month: 'Mar', earnings: 3200, sessions: 62 },
  { month: 'Apr', earnings: 3100, sessions: 59 },
  { month: 'May', earnings: 3900, sessions: 75 },
  { month: 'Jun', earnings: 4450, sessions: 84 },
  { month: 'Jul', earnings: 4200, sessions: 80 },
  { month: 'Aug', earnings: 4800, sessions: 92 },
  { month: 'Sep', earnings: 5120, sessions: 98 }
];
