import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">We Are <span className="text-red">Mermez</span></h2>
          <p className="about-lead">
            A full-service digital agency that brings brands to life through stunning design, 
            strategic marketing, and cutting-edge development.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Specialist Services</span>
            </div>
          </div>
          <p className="about-text">
            We are a creative digital agency dedicated to transforming ideas into powerful brand experiences. 
            With expertise in design, development, and marketing, we craft innovative solutions that drive success.
          </p>
          <button className="btn-secondary">Learn More About Us</button>
        </motion.div>

        <div className="about-visual">
          <div className="visual-rect rect-1"></div>
          <div className="visual-rect rect-2"></div>
          <div className="visual-rect rect-3"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
