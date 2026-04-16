import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import WorkDetail from './pages/WorkDetail';
import Contact from './pages/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';

// Admin Imports
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? 
              <AdminDashboard /> : 
              <AdminLogin onLogin={setIsAuthenticated} />
          } 
        />

        {/* Public Routes */}
        <Route path="*" element={
          <>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/work/:id" element={<WorkDetail />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Layout>
            <WhatsAppFloat />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
