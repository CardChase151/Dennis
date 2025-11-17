import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sofa, Droplets, Sparkles } from 'lucide-react';
import './Home.css';

function Home() {
  useEffect(() => {
    // Add fade-in animation class on mount
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      el.classList.add('animate');
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section gradient-bg">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1 className="hero-title fade-in">POWER CLEAN</h1>
          <p className="hero-subtitle fade-in delay-1">
            Carpet, Tile & Grout, Upholstery Cleaning Specialist
          </p>
          <p className="hero-description fade-in delay-2">
            Commercial • Residential • Restaurant
          </p>
          <a href="tel:949-351-0796" className="hero-phone fade-in delay-3">
            949-351-0796
          </a>
          <p className="hero-owner fade-in delay-3">
            Dennis Comba - Owner/Operator
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Our Services</h2>
          <div className="grid grid-3">
            {/* Upholstery Cleaning */}
            <Link to="/services/upholstery" className="service-card card fade-in">
              <div className="service-icon">
                <Sofa size={48} />
              </div>
              <h3>Upholstery Cleaning</h3>
              <p>
                Professional deep cleaning for all types of furniture. From couches
                to dining chairs, we restore the beauty and freshness of your upholstery.
              </p>
            </Link>

            {/* Steam Cleaning */}
            <Link to="/services/steam-cleaning" className="service-card card fade-in delay-1">
              <div className="service-icon">
                <Droplets size={48} />
              </div>
              <h3>Steam Cleaning</h3>
              <p>
                High-powered steam cleaning for carpets and floors. Deep sanitization
                that removes dirt, allergens, and bacteria from your surfaces.
              </p>
            </Link>

            {/* Tile & Grout */}
            <Link to="/services/tile-grout" className="service-card card fade-in delay-2">
              <div className="service-icon">
                <Sparkles size={48} />
              </div>
              <h3>Tile & Grout Cleaning</h3>
              <p>
                Specialized cleaning and restoration for tile and grout. We bring back
                the original shine and eliminate built-up grime.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section gradient-bg py-5">
        <div className="container text-center">
          <h2 className="cta-title">Ready for a Cleaner Space?</h2>
          <p className="cta-subtitle">
            Serving Orange County, CA and surrounding areas
          </p>
          <a href="tel:949-351-0796" className="btn btn-primary cta-button">
            Schedule Your Cleaning Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
