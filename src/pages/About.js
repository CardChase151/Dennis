import React from 'react';
import { Award, Heart, Shield, Star } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero gradient-bg">
        <div className="container hero-content text-center">
          <h1 className="fade-in">About Power Clean</h1>
          <p className="about-tagline fade-in delay-1">
            Your Trusted Cleaning Experts in Orange County
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story py-5">
        <div className="container">
          <div className="story-grid">
            <div className="story-image">
              <div className="placeholder-image">
                <p>Dennis Comba</p>
                <p>Owner/Operator</p>
              </div>
            </div>
            <div className="story-content">
              <h2 className="mb-3">Our Story</h2>
              <p className="mb-3">
                Power Clean was founded with a simple mission: to provide the highest quality
                cleaning services to homes and businesses throughout Orange County. Led by
                owner and operator Dennis Comba, we bring years of experience and a commitment
                to excellence to every job.
              </p>
              <p className="mb-3">
                What started as a passion for helping people maintain clean, healthy spaces
                has grown into a trusted name in professional cleaning services. We specialize
                in carpet, tile & grout, and upholstery cleaning for residential, commercial,
                and restaurant clients.
              </p>
              <p>
                At Power Clean, we don't just clean – we restore, refresh, and revitalize your
                spaces. Every client is treated like family, and every job is done with the
                same care and attention we'd give to our own homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Certified & Trusted</h2>
          <div className="grid grid-4">
            <div className="cert-card card text-center">
              <div className="cert-icon">
                <Award size={40} />
              </div>
              <h3>IICRC Certified</h3>
              <p>Institute of Inspection, Cleaning and Restoration Certification</p>
            </div>
            <div className="cert-card card text-center">
              <div className="cert-icon">
                <Shield size={40} />
              </div>
              <h3>EPA Lead-Safe</h3>
              <p>Environmental Protection Agency Certified</p>
            </div>
            <div className="cert-card card text-center">
              <div className="cert-icon">
                <Star size={40} />
              </div>
              <h3>15+ Years Experience</h3>
              <p>Serving Orange County with excellence</p>
            </div>
            <div className="cert-card card text-center">
              <div className="cert-icon">
                <Heart size={40} />
              </div>
              <h3>Family-Owned</h3>
              <p>Treating every client like family</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why Choose Power Clean?</h2>
          <div className="grid grid-3">
            <div className="why-card card">
              <h3>Professional Equipment</h3>
              <p>
                We use state-of-the-art, commercial-grade cleaning equipment that delivers
                superior results. Our investment in the best tools means better outcomes for you.
              </p>
            </div>
            <div className="why-card card">
              <h3>Eco-Friendly Solutions</h3>
              <p>
                Safe for your family, pets, and the environment. We use green cleaning
                products that are tough on dirt but gentle on your home and the planet.
              </p>
            </div>
            <div className="why-card card">
              <h3>Satisfaction Guaranteed</h3>
              <p>
                Your happiness is our priority. We stand behind our work with a 100%
                satisfaction guarantee. If you're not happy, we'll make it right.
              </p>
            </div>
            <div className="why-card card">
              <h3>Affordable Pricing</h3>
              <p>
                Premium quality doesn't have to mean premium prices. We offer competitive
                rates and transparent pricing with no hidden fees.
              </p>
            </div>
            <div className="why-card card">
              <h3>Flexible Scheduling</h3>
              <p>
                We work around your schedule. Evening and weekend appointments available
                to fit your busy lifestyle.
              </p>
            </div>
            <div className="why-card card">
              <h3>Local & Trusted</h3>
              <p>
                As a local, family-owned business, we're invested in our community.
                Your neighbors trust us, and you can too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta gradient-bg py-5">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Experience the Power Clean Difference?</h2>
          <p className="cta-subtitle mb-4">
            Call us today for a free consultation and quote
          </p>
          <a href="tel:949-351-0796" className="btn btn-primary">
            Call 949-351-0796
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
