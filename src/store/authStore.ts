import { create } from 'zustand';
import { User, UserRole } from '../types';
import { mockUsers } from '../data/users';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password?: string, role?: UserRole) => boolean;
  loginAsDemoStudent: () => void;
  loginAsDemoTutor: () => void;
  register: (name: string, email: string, role: UserRole) => void;
  logout: () => void;
  toggleSubscription: () => void;
  updateUser: (updates: Partial<User>) => void;
}

const STORAGE_KEY = 'brightminds_auth_user';

const getInitialUser = (): User | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load user from localStorage', e);
  }
  return null;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: getInitialUser(),
  isAuthenticated: getInitialUser() !== null,

  login: (email: string, _password?: string, role?: UserRole) => {
    // Check if known demo user
    const existingUser = mockUsers[email.toLowerCase()];
    let userToSet: User;

    if (existingUser) {
      userToSet = existingUser;
    } else {
      // Mock login for any email
      userToSet = {
        id: `user-${Date.now()}`,
        name: email.split('@')[0].replace('.', ' '),
        email: email,
        role: role || 'student',
        isSubscribed: role !== 'tutor', // students default to subscribed demo
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        planName: role === 'tutor' ? 'Verified Instructor' : 'Premium Plan'
      };
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(userToSet));
    set({ user: userToSet, isAuthenticated: true });
    return true;
  },

  loginAsDemoStudent: () => {
    const student = mockUsers['student@demo.com'];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(student));
    set({ user: student, isAuthenticated: true });
  },

  loginAsDemoTutor: () => {
    const tutor = mockUsers['tutor@demo.com'];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tutor));
    set({ user: tutor, isAuthenticated: true });
  },

  register: (name: string, email: string, role: UserRole) => {
    const newUser: User = {
      id: `user-${Date.now()}`,
      name,
      email,
      role,
      isSubscribed: role === 'student', // new demo student defaults to active subscription
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200`,
      planName: role === 'student' ? 'Premium All-Access Pass' : 'Verified Educator Pro',
      renewalDate: role === 'student' ? '12 June 2026' : undefined
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    set({ user: newUser, isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
    set({ user: null, isAuthenticated: false });
  },

  toggleSubscription: () => {
    const { user } = get();
    if (!user) return;
    const updated = {
      ...user,
      isSubscribed: !user.isSubscribed,
      planName: !user.isSubscribed ? 'Premium All-Access Pass' : 'Free Basic Pass'
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    set({ user: updated });
  },

  updateUser: (updates: Partial<User>) => {
    const { user } = get();
    if (!user) return;
    const updated = { ...user, ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    set({ user: updated });
  }
}));
