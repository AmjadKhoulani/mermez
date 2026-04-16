import React, { useState, useEffect } from 'react';
import { Search, Globe, Save, AlertCircle, CheckCircle } from 'lucide-react';

const SEOManager = () => {
  const [pages, setPages] = useState([]);
  const [editingPage, setEditingPage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);

  useEffect(() => {
    fetch('/api/get_content.php?type=seo')
      .then(res => res.json())
      .then(data => {
        // If empty, initialize with default pages
        if (data.length === 0) {
          setPages([
            { page_key: 'home', title_en: 'Mermez Lab | Home', desc_en: '', keywords_en: '' },
            { page_key: 'services', title_en: 'Our Services', desc_en: '', keywords_en: '' },
            { page_key: 'portfolio', title_en: 'Our Work', desc_en: '', keywords_en: '' },
          ]);
        } else {
          setPages(data);
        }
      });
  }, []);

  const handleSave = async (data) => {
    setLoading(true);
    setSaveStatus(null);
    try {
      const res = await fetch('/api/update_seo.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (result.success) {
        setSaveStatus('success');
        setEditingPage(data);
        const updatedRes = await fetch('/api/get_content.php?type=seo');
        setPages(await updatedRes.json());
      }
    } catch (err) {
      setSaveStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Page List */}
        <div className="lg:col-span-4 flex flex-col gap-4">
           {pages.map(page => (
             <button 
               key={page.page_key}
               onClick={() => setEditingPage(page)}
               className={`p-6 rounded-2xl border transition-all text-left flex items-center justify-between group ${
                 editingPage?.page_key === page.page_key ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20 hover:text-white'
               }`}
             >
                <div className="flex flex-col">
                   <span className="font-label text-[10px] uppercase tracking-widest font-black mb-1">{page.page_key}</span>
                   <span className="text-xs truncate max-w-[150px]">{page.title_en || 'Untitled'}</span>
                </div>
                <Globe size={16} className="opacity-20 group-hover:opacity-100 transition-all" />
             </button>
           ))}
        </div>

        {/* Editor Area */}
        <div className="lg:col-span-8">
           {editingPage ? (
             <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-12">
                <div className="flex justify-between items-center mb-12">
                   <h4 className="font-headline font-black text-2xl uppercase italic">SEO Config: <span className="text-primary">{editingPage.page_key}</span></h4>
                   <button 
                     onClick={() => handleSave(editingPage)}
                     disabled={loading}
                     className="bg-primary text-white px-8 py-4 rounded-xl font-label text-[10px] uppercase tracking-widest font-black flex items-center gap-3 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] transition-all"
                   >
                     <Save size={18} /> {loading ? 'Processing...' : 'Sync Meta Tags'}
                   </button>
                </div>

                <div className="flex flex-col gap-8">
                   {/* Meta Title */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-label uppercase tracking-widest text-white/20 font-black ml-2 mt-2">Title (EN)</label>
                         <input 
                           type="text" 
                           value={editingPage.title_en}
                           onChange={(e) => setEditingPage({...editingPage, title_en: e.target.value})}
                           className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white text-sm outline-none focus:border-primary/50"
                         />
                      </div>
                      <div className="flex flex-col gap-3">
                         <label className="text-[10px] font-label uppercase tracking-widest text-white/20 font-black ml-2 mt-2">Title (AR)</label>
                         <input 
                           type="text" 
                           dir="rtl"
                           value={editingPage.title_ar}
                           onChange={(e) => setEditingPage({...editingPage, title_ar: e.target.value})}
                           className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white text-sm outline-none focus:border-primary/50 font-body"
                         />
                      </div>
                   </div>

                   {/* Meta Description */}
                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-label uppercase tracking-widest text-white/20 font-black ml-2">Description (EN)</label>
                      <textarea 
                        value={editingPage.desc_en}
                        onChange={(e) => setEditingPage({...editingPage, desc_en: e.target.value})}
                        className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white text-sm outline-none focus:border-primary/50 min-h-[100px]"
                      />
                   </div>

                   {/* Google Preview Emulator */}
                   <div className="mt-12 p-8 bg-black/40 rounded-3xl border border-white/5">
                      <span className="text-[10px] font-label font-black uppercase text-primary tracking-widest block mb-6 italic">Google Search Result Preview</span>
                      <div className="flex flex-col gap-2">
                         <span className="text-blue-400 text-xl font-medium hover:underline cursor-pointer truncate">{editingPage.title_en || 'Your Page Title'}</span>
                         <span className="text-green-600 text-sm italic">https://mermez.com/{editingPage.page_key}</span>
                         <span className="text-white/40 text-sm leading-relaxed">{editingPage.desc_en || 'Please provide a meta description to see how your page looks in search results...'}</span>
                      </div>
                   </div>
                </div>

                {saveStatus && (
                  <div className={`mt-8 p-4 rounded-xl flex items-center gap-3 font-label text-[10px] uppercase tracking-widest font-black ${
                    saveStatus === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                  }`}>
                    {saveStatus === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    {saveStatus === 'success' ? 'Changes propagated successfully' : 'Sync failure: Check API logs'}
                  </div>
                )}
             </div>
           ) : (
             <div className="h-full min-h-[400px] border-2 border-dashed border-white/5 rounded-[2.5rem] flex items-center justify-center text-white/10 flex-col gap-6 uppercase tracking-[0.5em] font-label">
                <Search size={48} />
                Select a page node to begin audit
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default SEOManager;
