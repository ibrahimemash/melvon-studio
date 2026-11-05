import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="app">
      <header className="navbar">
        <a href="#" className="logo">MILFON<span>.</span></a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home">الرئيسية</a>
          <a href="#services">خدماتنا</a>
          <a href="#about">من نحن</a>
          <a href="#contact">تواصل معنا</a>
        </nav>

        <a href="#contact" className="nav-cta">ابدأ مشروعك</a>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="eyebrow">CREATIVE DIGITAL STUDIO</span>

          <h1>
            نصنع أفكارًا
            <br />
            <span>تترك أثرًا.</span>
          </h1>

          <p>
            استوديو ميلفون الإبداعي، حيث تلتقي التكنولوجيا
            بالخيال لنصنع تجارب رقمية وهوية بصرية مختلفة.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-button">
              اكتشف خدماتنا
            </a>
            <a href="#about" className="secondary-button">
              اكتشف ميلفون
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-circle"></div>
          <div className="art-card">
            <span>✳</span>
            <strong>M</strong>
            <small>IMAGINE. CREATE. INSPIRE.</small>
          </div>
          <div className="art-caption">EST. 2026</div>
        </div>
      </section>

      <section className="services" id="services">
        <span className="eyebrow">WHAT WE DO</span>
        <h2>مساحة للإبداع بلا حدود</h2>

        <div className="service-grid">
          <article className="service-card">
            <span>01</span>
            <h3>الهوية البصرية</h3>
            <p>نصنع هويات تعبر عن شخصية علامتك التجارية.</p>
          </article>

          <article className="service-card">
            <span>02</span>
            <h3>التصميم الإبداعي</h3>
            <p>تصميمات إعلانية ومحتوى بصري باحترافية.</p>
          </article>

          <article className="service-card">
            <span>03</span>
            <h3>التجارب الرقمية</h3>
            <p>نحوّل الأفكار إلى تجارب رقمية مميزة.</p>
          </article>
        </div>
      </section>

      <footer id="contact">
        <strong>MILFON<span>.</span></strong>
        <p>نحوّل الخيال إلى واقع رقمي.</p>
        <small>© 2026 MILFON Studio. All rights reserved.</small>
      </footer>
    </main>
  );
}

export default App;
