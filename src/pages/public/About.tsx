import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, ShieldCheck, Heart, Sparkles, Users, BookOpen } from 'lucide-react';
import { mockTutors } from '../../data/tutors';

export const About: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-indigo-950 to-indigo-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
            Our Story & Mission
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-poppins">
            Empowering Every Student to Reach Their Full Potential
          </h1>
          <p className="text-base sm:text-lg text-indigo-100/90 leading-relaxed max-w-2xl mx-auto">
            Bright Minds Learning was founded on a single core belief: personalized, high-quality education should be engaging, accessible, and inspiring for every learner worldwide.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-900 flex items-center justify-center">
              <Award className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950">Top 1% Educator Rigor</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We handpick instructors from MIT, Stanford, Oxford, and Harvard who possess deep subject knowledge and a genuine spark for teaching.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sparkles className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950">Dual Mode Flexibility</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Combine interactive 1-on-1 live mentoring sessions with high-production pre-recorded video tutorials to suit your schedule.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm space-y-4">
            <div className="h-14 w-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold text-indigo-950">Empirical Grade Outcomes</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              98.4% of our enrolled students report a letter-grade improvement within 30 days of active participation.
            </p>
          </div>
        </div>
      </section>

      {/* Tutors Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl font-bold text-indigo-950 font-poppins">Meet Our Lead Faculty</h2>
          <p className="text-sm text-slate-600 mt-2">Passionate mentors dedicated to student success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTutors.slice(0, 3).map((tutor) => (
            <div key={tutor.id} className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex items-center gap-4">
              <img src={tutor.photo} alt={tutor.name} className="h-16 w-16 rounded-2xl object-cover" />
              <div>
                <h4 className="text-base font-bold text-indigo-950">{tutor.name}</h4>
                <p className="text-xs text-indigo-600 font-semibold">{tutor.title}</p>
                <p className="text-[11px] text-slate-500 mt-1">{tutor.education}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
