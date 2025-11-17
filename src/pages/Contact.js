import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Send form data to backend/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero gradient-bg">
        <div className="container hero-content text-center">
          <h1 className="fade-in">Contact Us</h1>
          <p className="contact-tagline fade-in delay-1">
            Get in touch for a free consultation and quote
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="mb-4">Get In Touch</h2>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:949-351-0796" className="contact-link">
                    949-351-0796
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:info@powerclean.com" className="contact-link">
                    info@powerclean.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Service Area</h3>
                  <p>Orange County, California</p>
                  <p className="mt-1">Willing to travel within 30 miles</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h3>Hours</h3>
                  <p>Monday - Saturday</p>
                  <p>8:00 AM - 6:00 PM</p>
                  <p className="mt-1">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container card">
              <h2 className="mb-4">Send Us a Message</h2>

              {submitted && (
                <div className="success-message">
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="upholstery">Upholstery Cleaning</option>
                    <option value="steam-cleaning">Steam Cleaning</option>
                    <option value="tile-grout">Tile & Grout Cleaning</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta gradient-bg py-5">
        <div className="container text-center">
          <h2 className="cta-title">Prefer to Call?</h2>
          <p className="cta-subtitle mb-4">
            We're ready to help with all your cleaning needs
          </p>
          <a href="tel:949-351-0796" className="btn btn-primary">
            Call 949-351-0796
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
