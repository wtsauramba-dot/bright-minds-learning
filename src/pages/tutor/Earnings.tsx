import React from 'react';
import { DollarSign, TrendingUp, Download, Calendar, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { mockTutorEarnings } from '../../data/bookings';

export const TutorEarnings: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-indigo-950 font-poppins">
            Earnings & Revenue Analytics
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track monthly payouts from course sales and 1-on-1 tutoring sessions.
          </p>
        </div>

        <button
          onClick={() => alert('Exporting PDF Earnings Statement...')}
          className="px-4 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-amber-400 font-bold text-xs shadow flex items-center gap-1.5 self-start transition-colors"
        >
          <Download className="h-4 w-4" />
          Export Monthly Statement
        </button>
      </div>

      {/* Top Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="rounded-3xl bg-gradient-to-br from-indigo-950 to-indigo-900 text-white p-6 shadow-md space-y-2">
          <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider block">YTD Gross Earnings</span>
          <h3 className="text-3xl font-black text-amber-400">$30,870.00</h3>
          <p className="text-xs text-indigo-200 flex items-center gap-1">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
            +24% increase over last year
          </p>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Next Scheduled Payout</span>
          <h3 className="text-3xl font-black text-indigo-950">$2,450.00</h3>
          <p className="text-xs text-emerald-600 font-bold">Payout Date: Oct 1, 2026 (Stripe Express)</p>
        </div>

        <div className="rounded-3xl bg-white border border-slate-200/80 p-6 shadow-sm space-y-2">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">1-on-1 Session Hours</span>
          <h3 className="text-3xl font-black text-indigo-950">98 Hours</h3>
          <p className="text-xs text-slate-500">Average Rate: $45.00/hr</p>
        </div>

      </div>

      {/* Recharts Bar Chart Container */}
      <div className="rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-indigo-950">2026 Revenue Growth (USD)</h3>
            <p className="text-xs text-slate-500">Monthly breakdown of student bookings and course enrollment fees</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Current Month: $5,120
          </span>
        </div>

        <div className="h-72 w-full pt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockTutorEarnings} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" fontSize={12} tickLine={false} />
              <YAxis stroke="#64748B" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
              <Tooltip 
                formatter={(value: any) => [`$${value}`, 'Earnings']}
                contentStyle={{ backgroundColor: '#1E1B4B', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '12px' }}
                itemStyle={{ color: '#F59E0B', fontWeight: 'bold' }}
              />
              <Bar dataKey="earnings" radius={[8, 8, 0, 0]}>
                {mockTutorEarnings.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={index === mockTutorEarnings.length - 1 ? '#F59E0B' : '#312E81'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
};
