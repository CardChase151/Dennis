import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, LogOut, Upload, X, Trash2, Star, Loader } from 'lucide-react';
import { supabase } from '../../supabaseClient';
import './GalleryManagement.css';

const serviceNames = {
  'upholstery': 'Upholstery Cleaning',
  'steam-cleaning': 'Steam Cleaning',
  'tile-grout': 'Tile & Grout',
  'other': 'Other Services'
};

function GalleryManagement() {
  const { service } = useParams();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [topPhotos, setTopPhotos] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [manageTopMode, setManageTopMode] = useState(false);
  const [tempTopPhotos, setTempTopPhotos] = useState([]);

  useEffect(() => {
    checkUser();
    loadPhotos();
    // eslint-disable-next-line
  }, [service]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate('/login');
    }
  };

  const loadPhotos = async () => {
    setLoading(true);
    // Mock data - replace with actual Supabase fetch
    const mockPhotos = Array(15).fill(null).map((_, i) => ({
      id: `photo-${i}`,
      url: `https://via.placeholder.com/300x200/2d5a87/ffffff?text=Photo+${i + 1}`,
      thumbnail: `https://via.placeholder.com/150x100/2d5a87/ffffff?text=${i + 1}`,
      isTopPhoto: i < 10
    }));

    setPhotos(mockPhotos);
    setTopPhotos(mockPhotos.filter(p => p.isTopPhoto).slice(0, 10));
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files).slice(0, 10);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    setUploading(true);
    // TODO: Upload to Supabase storage
    console.log('Uploading files:', selectedFiles);

    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSelectedFiles([]);
    setUploading(false);
    loadPhotos();
  };

  const handleDelete = async (photoId) => {
    // TODO: Delete from Supabase storage
    console.log('Deleting photo:', photoId);
    setPhotos(photos.filter(p => p.id !== photoId));
    setTopPhotos(topPhotos.filter(p => p.id !== photoId));
    setDeleteConfirm(null);
  };

  const toggleTopPhoto = (photo) => {
    const isSelected = tempTopPhotos.some(p => p.id === photo.id);

    if (isSelected) {
      setTempTopPhotos(tempTopPhotos.filter(p => p.id !== photo.id));
    } else {
      if (tempTopPhotos.length < 10) {
        setTempTopPhotos([...tempTopPhotos, photo]);
      }
    }
  };

  const saveTopPhotos = async () => {
    // TODO: Save to Supabase top_photos table
    console.log('Saving top photos:', tempTopPhotos);
    setTopPhotos(tempTopPhotos);
    setManageTopMode(false);
  };

  const startManageTop = () => {
    setTempTopPhotos([...topPhotos]);
    setManageTopMode(true);
  };

  const cancelManageTop = () => {
    setTempTopPhotos([]);
    setManageTopMode(false);
  };

  return (
    <div className="gallery-management">
      {/* Header */}
      <div className="gallery-header gradient-bg">
        <div className="container">
          <div className="header-top">
            <button className="back-btn" onClick={() => navigate('/admin')}>
              <ArrowLeft size={20} />
              Back to Dashboard
            </button>
            <button
              className="logout-btn"
              onClick={() => setShowLogoutConfirm(true)}
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
          <h1>{serviceNames[service]} Gallery</h1>
        </div>
      </div>

      <div className="gallery-content py-5">
        <div className="container">
          {/* Add Photos Section */}
          <section className="upload-section card mb-4">
            <h2 className="mb-3">Add Photos</h2>
            <div className="upload-area">
              <input
                type="file"
                id="file-input"
                multiple
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileSelect}
                className="file-input"
                disabled={uploading}
              />
              <label htmlFor="file-input" className="upload-label">
                <Upload size={32} />
                <span>Choose photos to upload</span>
                <small>Max 10 images (JPG, PNG, WebP, max 5MB each)</small>
              </label>
            </div>

            {selectedFiles.length > 0 && (
              <div className="selected-files">
                <h3>Selected Files ({selectedFiles.length})</h3>
                <div className="file-list">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="file-item">
                      <span>{file.name}</span>
                      <button
                        onClick={() => setSelectedFiles(selectedFiles.filter((_, i) => i !== index))}
                        className="remove-file-btn"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>
                <button
                  onClick={handleUpload}
                  className="btn btn-primary upload-btn"
                  disabled={uploading}
                >
                  {uploading ? (
                    <>
                      <Loader className="spinner-icon" size={20} />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Upload Photos
                    </>
                  )}
                </button>
              </div>
            )}
          </section>

          {/* Top 10 Management */}
          <section className="top-photos-section card mb-4">
            <div className="section-header">
              <h2>Top 10 Photos</h2>
              {!manageTopMode ? (
                <button className="btn btn-secondary" onClick={startManageTop}>
                  Manage Top 10
                </button>
              ) : (
                <div className="manage-buttons">
                  <button className="btn btn-secondary" onClick={cancelManageTop}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={saveTopPhotos}>
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {manageTopMode ? (
              <p className="selection-info">
                Select up to 10 photos ({tempTopPhotos.length}/10 selected)
              </p>
            ) : (
              <p>These photos appear on the public service page</p>
            )}
          </section>

          {/* Current Photos Grid */}
          <section className="photos-section card">
            <h2 className="mb-3">All Photos ({photos.length})</h2>

            {loading ? (
              <div className="loading-state">
                <Loader className="spinner" size={48} />
                <p>Loading photos...</p>
              </div>
            ) : photos.length === 0 ? (
              <div className="empty-state">
                <p>No photos uploaded yet</p>
              </div>
            ) : (
              <div className="photos-grid">
                {photos.map((photo) => {
                  const isTopPhoto = topPhotos.some(p => p.id === photo.id);
                  const isSelected = manageTopMode && tempTopPhotos.some(p => p.id === photo.id);

                  return (
                    <div
                      key={photo.id}
                      className={`photo-item ${manageTopMode ? 'selectable' : ''} ${isSelected ? 'selected' : ''}`}
                      onClick={() => manageTopMode && toggleTopPhoto(photo)}
                    >
                      <img src={photo.thumbnail} alt={`${serviceNames[service]} example`} />

                      {!manageTopMode && (
                        <button
                          className="delete-btn"
                          onClick={() => setDeleteConfirm(photo.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      )}

                      {isTopPhoto && !manageTopMode && (
                        <div className="top-badge">
                          <Star size={16} fill="currentColor" />
                          Top 10
                        </div>
                      )}

                      {manageTopMode && isSelected && (
                        <div className="selected-badge">
                          <Star size={20} fill="currentColor" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Delete Photo?</h3>
            <p>Are you sure you want to delete this photo? This action cannot be undone.</p>
            <div className="modal-buttons">
              <button
                className="btn btn-secondary"
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleDelete(deleteConfirm)}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

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

export default GalleryManagement;
