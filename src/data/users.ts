import { User } from '../types';

export const mockUsers: Record<string, User> = {
  'student@demo.com': {
    id: 'user-student-1',
    name: 'Alex Johnson',
    email: 'student@demo.com',
    role: 'student',
    isSubscribed: true,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200',
    planName: 'Premium All-Access Pass',
    renewalDate: '12 June 2026',
    bio: 'High school senior preparing for college STEM major.'
  },
  'tutor@demo.com': {
    id: 'user-tutor-1',
    name: 'Dr. Marcus Vance',
    email: 'tutor@demo.com',
    role: 'tutor',
    isSubscribed: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    planName: 'Verified Educator Pro',
    bio: 'Ph.D. in Applied Mathematics. Lead Tutor at Bright Minds.'
  }
};
