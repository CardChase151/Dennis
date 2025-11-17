import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sofa, Droplets, Sparkles, Wrench, LogOut } from 'lucide-react';
import { supabase } from '../../supabaseClient';
import './AdminDashboard.css';

function AdminDashboard() {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    // eslint-disable-next-line
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/login');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const galleryCards = [
    {
      title: 'Upholstery Cleaning',
      icon: Sofa,
      path: '/admin/upholstery',
      color: '#3b82f6'
    },
    {
      title: 'Steam Cleaning',
      icon: Droplets,
      path: '/admin/steam-cleaning',
      color: '#06b6d4'
    },
    {
      title: 'Tile & Grout',
      icon: Sparkles,
      path: '/admin/tile-grout',
      color: '#8b5cf6'
    },
    {
      title: 'Other Services',
      icon: Wrench,
      path: '/admin/other',
      color: '#10b981'
    }
  ];

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <div className="admin-header gradient-bg">
        <div className="container">
          <div className="header-content">
            <div>
              <h1>Welcome, Dennis</h1>
              <p>Manage your service photo galleries</p>
            </div>
            <button
              className="logout-btn"
              onClick={() => setShowLogoutConfirm(true)}
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Cards */}
      <section className="dashboard-content py-5">
        <div className="container">
          <div className="dashboard-grid">
            {galleryCards.map((card) => (
              <div
                key={card.title}
                className="gallery-card card"
                onClick={() => navigate(card.path)}
                style={{ '--card-color': card.color }}
              >
                <div className="gallery-card-icon">
                  <card.icon size={40} />
                </div>
                <h2>{card.title}</h2>
                <p>Manage photos and top 10</p>
                <div className="gallery-card-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay" onClick={() => setShowLogoutConfirm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to log out?</p>
            <div className="modal-buttons">
              <button
                className="btn btn-secondary"
                onClick={() => setShowLogoutConfirm(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
