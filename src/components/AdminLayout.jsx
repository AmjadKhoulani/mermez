import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, Briefcase, Search, Settings, LogOut, Menu, X, ChevronRight } from 'lucide-react';

const AdminLayout = ({ children, activeTab, setActiveTab }) => {
  const { t } = useTranslation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'seo', label: 'SEO Manager', icon: Search },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex font-body">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-[#111] border-r border-white/5 transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          {isSidebarOpen && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold">M</div>
              <span className="font-headline font-black tracking-tighter text-xl italic pt-1">ADMIN</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 mt-8 flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-4 p-4 rounded-xl transition-all group ${
                activeTab === item.id ? 'bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]' : 'text-white/40 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && (
                <span className="flex-1 text-left font-label text-xs uppercase tracking-widest font-bold pt-1">{item.label}</span>
              )}
              {isSidebarOpen && activeTab === item.id && <ChevronRight size={14} className="opacity-50" />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-4 p-4 text-red-500/50 hover:text-red-500 hover:bg-red-500/5 rounded-xl transition-all">
            <LogOut size={20} />
            {isSidebarOpen && <span className="font-label text-xs uppercase tracking-widest font-bold pt-1">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-12 bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-50">
          <div className="flex flex-col">
             <h2 className="font-headline font-black text-2xl uppercase italic leading-none">{activeTab}</h2>
             <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] font-label mt-2">Mermez Lab Management Node</span>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right flex flex-col">
               <span className="text-xs font-bold text-white/80">Amjad Khoulani</span>
               <span className="text-[10px] text-primary font-label uppercase tracking-widest leading-none mt-1">Super Admin</span>
             </div>
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 overflow-hidden ring-2 ring-primary/20">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin" alt="avatar" />
             </div>
          </div>
        </header>

        <div className="p-12">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
