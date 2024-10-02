import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Taskify</h1>
          <p>
            Your all-in-one platform for managing notes, to-dos, events, and
            more!
          </p>
          <a href="#get-started" className="cta-button">
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Manage Notes</h3>
            <p>Keep track of all your important information in one place.</p>
          </div>
          <div className="feature">
            <h3>To-Do Lists</h3>
            <p>Organize your tasks and increase productivity.</p>
          </div>
          <div className="feature">
            <h3>Calendar Integration</h3>
            <p>Schedule events and never miss an important deadline.</p>
          </div>
          <div className="feature">
            <h3>Cloud Storage</h3>
            <p>Store and access your files anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <a href="#sign-up" className="cta-button">
          Sign Up Now
        </a>
      </section>
    </div>
  );
};

export default Header;
