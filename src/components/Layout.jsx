import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white">
      <Navbar />
      <main className="pt-24 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
