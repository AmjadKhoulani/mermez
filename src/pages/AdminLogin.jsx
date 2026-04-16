import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, ArrowRight, Loader2 } from 'lucide-react';

const AdminLogin = ({ onLogin }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      
      if (data.success) {
        onLogin(true);
      } else {
        setError(data.error || 'Invalid identifier or access key.');
      }
    } catch (err) {
      setError('Connection to node failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#111] border border-white/5 p-12 rounded-[2rem] relative z-10 backdrop-blur-3xl"
      >
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center font-headline font-black text-3xl italic mb-6 shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">M</div>
          <h1 className="font-headline font-black text-2xl uppercase italic tracking-tight text-white">Access Node</h1>
          <p className="font-label text-xs uppercase tracking-[0.3em] text-white/30 mt-2 italic">Mermez Lab Management</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="relative group">
             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
             <input 
               type="text" 
               placeholder="Identifier"
               value={username}
               onChange={(e) => setUsername(e.target.value)}
               className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-label text-xs tracking-widest uppercase font-bold"
               required
             />
          </div>

          <div className="relative group">
             <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-primary transition-colors" size={18} />
             <input 
               type="password" 
               placeholder="Access Key"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all font-label text-xs tracking-widest uppercase font-bold"
               required
             />
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-primary text-[10px] font-label uppercase tracking-widest font-black text-center italic"
            >
              {error}
            </motion.p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-primary hover:bg-primary-container text-white py-5 rounded-2xl font-label text-xs uppercase tracking-[0.4em] font-black flex items-center justify-center gap-4 group transition-all disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : (
              <>
                Initialize Session
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
           <span className="text-[10px] text-white/10 uppercase tracking-[0.5em] font-label">Encrypted Terminal V.4.0</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
