import React, { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import PortfolioManager from './PortfolioManager';
import SEOManager from './SEOManager';
import { BarChart, TrendingUp, Users, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { label: 'Total Projects', value: '12', icon: BarChart, trend: '+2 this month' },
    { label: 'Site Visits', value: '4.2k', icon: Activity, trend: '+12.5%' },
    { label: 'SEO Score', value: '94%', icon: TrendingUp, trend: 'Optimized' },
    { label: 'Team Members', value: '8', icon: Users, trend: 'Global Shift' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'portfolio':
        return <PortfolioManager />;
      case 'seo':
        return <SEOManager />;
      case 'dashboard':
      default:
        return (
          <div className="flex flex-col gap-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl hover:border-primary/30 transition-all group">
                   <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                        <stat.icon size={24} />
                      </div>
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary font-black italic">{stat.trend}</span>
                   </div>
                   <h3 className="text-3xl font-headline font-black text-white italic mb-2 tracking-tighter">{stat.value}</h3>
                   <p className="text-xs font-label uppercase tracking-[0.2em] text-white/30 font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Main Dashboard View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 p-12 bg-white/5 border border-white/5 rounded-[2.5rem]">
                  <h3 className="font-headline font-black text-2xl uppercase italic mb-8">Node Activity</h3>
                  <div className="h-64 flex items-center justify-center border border-white/5 rounded-3xl bg-white/2">
                     <p className="font-label text-xs uppercase tracking-[0.4em] text-white/20 italic">Live Analytics Visualizer Coming Soon</p>
                  </div>
               </div>
               <div className="lg:col-span-4 p-12 bg-primary/5 border border-primary/10 rounded-[2.5rem]">
                  <h3 className="font-headline font-black text-2xl uppercase italic mb-8 text-primary">SEO Health</h3>
                  <div className="flex flex-col gap-6">
                     {['Mermez Lab', 'Services', 'Case Studies'].map((page, i) => (
                       <div key={i} className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                          <span className="font-label text-[10px] uppercase tracking-widest text-white/60 font-bold">{page}</span>
                          <div className="w-12 h-2 bg-white/5 rounded-full overflow-hidden">
                             <div className="h-full bg-primary" style={{ width: i === 0 ? '90%' : i === 1 ? '75%' : '85%' }}></div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AdminLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </AdminLayout>
  );
};

export default AdminDashboard;
