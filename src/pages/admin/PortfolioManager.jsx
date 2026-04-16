import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Eye } from 'lucide-react';

const PortfolioManager = () => {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch projects from MySQL via API
  useEffect(() => {
    fetch('/api/get_content.php?type=portfolio')
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Failed to load projects:', err));
  }, []);

  const handleSave = async (projectData) => {
    setLoading(true);
    try {
      const res = await fetch('/api/update_portfolio.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData)
      });
      const result = await res.json();
      if (result.success) {
        // Refresh project list
        const updatedRes = await fetch('/api/get_content.php?type=portfolio');
        setProjects(await updatedRes.json());
        setEditingProject(null);
      }
    } catch (err) {
      console.error('Save failed:', err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
         <h3 className="font-headline font-black text-2xl uppercase italic">Managed Cases</h3>
         <button 
           onClick={() => setEditingProject({ id: '', title_en: '', category: '', year: new Date().getFullYear().toString() })}
           className="bg-primary text-white p-4 rounded-xl flex items-center gap-3 font-label text-[10px] uppercase tracking-widest font-black"
         >
           <Plus size={18} /> Add New Node
         </button>
      </div>

      {editingProject ? (
        <ProjectEditor 
          project={editingProject} 
          onSave={handleSave} 
          onCancel={() => setEditingProject(null)} 
          loading={loading}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-8 bg-white/5 border border-white/5 rounded-3xl group relative overflow-hidden">
               <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                     <img src={project.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-2">
                     <button onClick={() => setEditingProject(project)} className="p-2 bg-white/5 hover:bg-primary hover:text-white rounded-lg transition-all text-white/40"><Edit2 size={16} /></button>
                     <button className="p-2 bg-white/5 hover:bg-red-500 hover:text-white rounded-lg transition-all text-white/40"><Trash2 size={16} /></button>
                  </div>
               </div>
               <p className="font-label text-[10px] uppercase tracking-widest text-primary font-black mb-2 italic">{project.category}</p>
               <h4 className="font-headline font-black text-xl italic text-white mb-4 tracking-tight">{project.title_en}</h4>
               <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <span className="text-[10px] font-label text-white/20 uppercase tracking-widest">{project.year}</span>
                  <div className="w-1 h-1 rounded-full bg-white/10" />
                  <span className="text-[10px] font-label text-white/20 uppercase tracking-widest">Enterprise Case</span>
               </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectEditor = ({ project, onSave, onCancel, loading }) => {
  const [formData, setFormData] = useState(project);

  return (
    <div className="bg-[#111] border border-white/10 rounded-[2.5rem] p-12 overflow-hidden relative">
       <div className="flex justify-between items-center mb-12">
          <h4 className="font-headline font-black text-3xl uppercase italic tracking-tighter">Edit Node: <span className="text-primary">{formData.id || 'New'}</span></h4>
          <div className="flex gap-4">
             <button onClick={onCancel} className="p-4 bg-white/5 text-white/40 hover:text-white rounded-xl font-label text-[10px] uppercase tracking-widest transition-all">Discard</button>
             <button 
               onClick={() => onSave(formData)} 
               disabled={loading}
               className="p-4 bg-primary text-white rounded-xl font-label text-[10px] uppercase tracking-widest font-black flex items-center gap-3 transition-all"
             >
               <Save size={18} /> {loading ? 'Saving...' : 'Commit Changes'}
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-6">
             <label className="text-[10px] font-label uppercase tracking-[0.4em] text-white/20 ml-2 italic font-black">Entity ID</label>
             <input 
               type="text" 
               value={formData.id} 
               onChange={(e) => setFormData({...formData, id: e.target.value})}
               className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white outline-none focus:border-primary/50"
             />

             <label className="text-[10px] font-label uppercase tracking-[0.4em] text-white/20 ml-2 italic font-black">Title (EN)</label>
             <input 
               type="text" 
               value={formData.title_en} 
               onChange={(e) => setFormData({...formData, title_en: e.target.value})}
               className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white outline-none focus:border-primary/50"
             />

             <label className="text-[10px] font-label uppercase tracking-[0.4em] text-white/20 ml-2 italic font-black">Title (AR)</label>
             <input 
               type="text" 
               dir="rtl"
               value={formData.title_ar} 
               onChange={(e) => setFormData({...formData, title_ar: e.target.value})}
               className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white outline-none focus:border-primary/50 font-body"
             />
          </div>

          <div className="flex flex-col gap-6">
             <label className="text-[10px] font-label uppercase tracking-[0.4em] text-white/20 ml-2 italic font-black">Category</label>
             <input 
               type="text" 
               value={formData.category} 
               onChange={(e) => setFormData({...formData, category: e.target.value})}
               className="bg-white/5 border border-white/5 rounded-2xl p-6 text-white outline-none focus:border-primary/50"
             />

             <label className="text-[10px] font-label uppercase tracking-[0.4em] text-white/20 ml-2 italic font-black">Image URL</label>
             <div className="flex gap-4">
                <input 
                  type="text" 
                  value={formData.image} 
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                  className="flex-1 bg-white/5 border border-white/5 rounded-2xl p-6 text-white outline-none focus:border-primary/50"
                />
                <div className="w-16 h-16 bg-white/5 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                   <img src={formData.image} alt="" className="w-full h-full object-cover" />
                </div>
             </div>
          </div>

          <div className="md:col-span-2">
            <label className="text-[10px] font-label uppercase tracking-[0.4em] text-white/20 ml-2 italic font-black mb-6 block">Challenge Description (AR)</label>
            <textarea 
               dir="rtl"
               value={formData.challenge_ar} 
               onChange={(e) => setFormData({...formData, challenge_ar: e.target.value})}
               className="w-full bg-white/5 border border-white/5 rounded-2xl p-8 text-white outline-none focus:border-primary/50 font-body min-h-[150px]"
            />
          </div>
       </div>
    </div>
  );
};

export default PortfolioManager;
