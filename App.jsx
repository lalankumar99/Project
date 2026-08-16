import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  const features = [
    { title: "Paid Courses", icon: "💎" },
    { title: "Free Courses", icon: "📚" },
    { title: "Test Series", icon: "📝" },
    { title: "Polytechnic Updates", icon: "📢" },
    { title: "Scholarship", icon: "🎓" },
    { title: "Notice Board", icon: "📋" },
    { title: "Syllabus", icon: "📖" },
    { title: "About", icon: "ℹ️" }
  ];

  const filteredFeatures = features.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* Header */}
      <header className="header">

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className="logo">
          <span>POLYTECHNIC</span> HUB
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </header>

      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "active" : ""}`}>

        <div className="sidebar-logo">
          POLYTECHNIC HUB
        </div>

        <nav>
          <a href="/">🏠 Home</a>
          <a href="/courses">📚 Courses</a>
          <a href="/tests">📝 Test Series</a>
          <a href="/notes">📖 Notes</a>
          <a href="/syllabus">🎓 Syllabus</a>
          <a href="/notice">📢 Notice</a>
          <a href="/scholarship">💰 Scholarship</a>
          <a href="/about">ℹ️ About</a>
        </nav>

      </aside>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Main */}
      <main className="main">

        {/* Hero */}
        <section className="hero">

          <div className="hero-content">

            <p className="welcome">
              Welcome to
            </p>

            <h1>
              POLYTECHNIC HUB
            </h1>

            <p>
              Diploma Engineering Students के लिए
              एक Complete Study Platform
            </p>

            <button className="primary-btn">
              Explore Courses →
            </button>

          </div>

        </section>

        {/* Search */}
        <section className="search-section">

          <div className="search-box">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search courses, notes, syllabus..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

          </div>

        </section>

        {/* Features */}
        <section className="features">

          <div className="section-heading">
            <h2>Explore Polytechnic Hub</h2>
            <p>Everything you need in one place</p>
          </div>

          <div className="feature-grid">

            {filteredFeatures.map((item, index) => (

              <div
                className="feature-card"
                key={index}
              >

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <span className="arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* YouTube Section */}
        <section className="youtube-section">

          <div className="section-heading">
            <h2>Featured Videos</h2>
            <p>Latest educational videos</p>
          </div>

          <div className="video-grid">

            <div className="video-card">
              <div className="video-placeholder">
                ▶
              </div>
              <h3>Latest Polytechnic Video</h3>
            </div>

            <div className="video-card">
              <div className="video-placeholder">
                ▶
              </div>
              <h3>Important Exam Preparation</h3>
            </div>

            <div className="video-card">
              <div className="video-placeholder">
                ▶
              </div>
              <h3>Diploma Engineering Updates</h3>
            </div>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="footer">

        <h3>POLYTECHNIC HUB</h3>

        <p>
          Learn • Practice • Succeed
        </p>

        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} POLYTECHNIC HUB.
          All Rights Reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;