import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Heart, Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 text-slate-300 pt-16 pb-8 border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-500 flex items-center justify-center text-indigo-950 shadow-md">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-poppins">
                Bright Minds Learning
              </span>
            </Link>
            <p className="text-sm text-indigo-200/80 leading-relaxed max-w-sm">
              Shaping brighter futures, one lesson at a time. Empowering students worldwide with 1-on-1 live expert instruction and high-impact pre-recorded masterclasses.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="h-9 w-9 rounded-xl bg-indigo-900/80 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-indigo-950 transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-xl bg-indigo-900/80 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-indigo-950 transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-xl bg-indigo-900/80 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-indigo-950 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-9 w-9 rounded-xl bg-indigo-900/80 flex items-center justify-center text-amber-400 hover:bg-amber-500 hover:text-indigo-950 transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Explore</h4>
            <ul className="space-y-2 text-sm text-indigo-200/70">
              <li><Link to="/courses" className="hover:text-amber-400 transition-colors">All Courses</Link></li>
              <li><Link to="/courses?mode=Live" className="hover:text-amber-400 transition-colors">1-on-1 Live Lessons</Link></li>
              <li><Link to="/courses?mode=Recorded" className="hover:text-amber-400 transition-colors">Pre-recorded Tutorials</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">Featured Tutors</Link></li>
              <li><Link to="/pricing" className="hover:text-amber-400 transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>

          {/* Column 2: Subjects */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Subjects</h4>
            <ul className="space-y-2 text-sm text-indigo-200/70">
              <li><Link to="/courses?subject=Mathematics" className="hover:text-amber-400 transition-colors">Mathematics & Physics</Link></li>
              <li><Link to="/courses?subject=Computer Science" className="hover:text-amber-400 transition-colors">Computer Science & AI</Link></li>
              <li><Link to="/courses?subject=English & Writing" className="hover:text-amber-400 transition-colors">Creative Writing & Literature</Link></li>
              <li><Link to="/courses?subject=Chemistry & Biology" className="hover:text-amber-400 transition-colors">Chemistry & Biology</Link></li>
              <li><Link to="/courses?subject=Test Prep" className="hover:text-amber-400 transition-colors">SAT & Exam Prep</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2.5 text-sm text-indigo-200/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>100 Education Plaza, Cambridge, MA 02138</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <span>+1 (800) 555-BRIGHT</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-400 shrink-0" />
                <span>support@brightminds.edu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-indigo-900/80 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-indigo-300/60 gap-4">
          <p>© 2026 Bright Minds Learning Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
