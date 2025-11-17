import React from 'react';
import { Linkedin, Facebook, Instagram, ExternalLink } from 'lucide-react';
import './Social.css';

function Social() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/dennis-comba-230873353/',
      description: 'Connect with us professionally and see our business updates',
      color: '#0077b5'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/dennis.comba/',
      description: 'Like our page for updates, promotions, and customer testimonials',
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/dennisgcomba/',
      description: 'Follow us for before & after photos and behind-the-scenes content',
      color: '#e4405f'
    }
  ];

  return (
    <div className="social-page">
      {/* Hero Section */}
      <section className="social-hero gradient-bg">
        <div className="container hero-content text-center">
          <h1 className="fade-in">Connect With Us</h1>
          <p className="social-tagline fade-in delay-1">
            Follow Power Clean on social media for updates, before & after photos, and special offers
          </p>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-links-section py-5">
        <div className="container">
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-card card fade-in delay-${index}`}
                style={{ '--accent-color': social.color }}
              >
                <div className="social-card-icon">
                  <social.icon size={48} />
                </div>
                <h2>{social.name}</h2>
                <p>{social.description}</p>
                <div className="social-card-link">
                  <span>Visit Profile</span>
                  <ExternalLink size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Follow Section */}
      <section className="why-follow-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">Why Follow Us?</h2>
          <div className="grid grid-3">
            <div className="feature-card card text-center">
              <h3>Before & After Photos</h3>
              <p>
                See the amazing transformations we create for our clients. Get inspired
                for your own cleaning projects!
              </p>
            </div>
            <div className="feature-card card text-center">
              <h3>Exclusive Offers</h3>
              <p>
                Be the first to know about special promotions, seasonal discounts, and
                follower-only deals.
              </p>
            </div>
            <div className="feature-card card text-center">
              <h3>Cleaning Tips & Tricks</h3>
              <p>
                Learn professional cleaning techniques and maintenance tips to keep your
                spaces looking great between deep cleans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="social-cta gradient-bg py-5">
        <div className="container text-center">
          <h2 className="cta-title">Ready to Book a Cleaning?</h2>
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

export default Social;
