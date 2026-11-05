import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'الهوية البصرية',
    subtitle: 'VISUAL IDENTITY',
    description: 'نبني هويات بصرية متكاملة تمنح العلامات التجارية حضورًا مميزًا وشخصية لا تُنسى.',
    icon: '✳',
  },
  {
    number: '02',
    title: 'التصميم الإبداعي',
    subtitle: 'CREATIVE DESIGN',
    description: 'نحوّل الأفكار إلى أعمال بصرية جذابة تجمع بين الجمال والدقة والرسالة.',
    icon: '◈',
  },
  {
    number: '03',
    title: 'تطوير المواقع',
    subtitle: 'WEB EXPERIENCES',
    description: 'نصمم تجارب رقمية حديثة تجمع بين الأداء الممتاز والتصميم المتطور.',
    icon: '⌘',
  },
  {
    number: '04',
    title: 'المحتوى الرقمي',
    subtitle: 'DIGITAL CONTENT',
    description: 'نبتكر محتوى رقميًا يساعد العلامات التجارية على التواصل والتأثير.',
    icon: '✧',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="app" dir="rtl">

      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          MELVON<span>.</span>
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="فتح القائمة"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>الرئيسية</a>
          <a href="#services" onClick={closeMenu}>خدماتنا</a>
          <a href="#about" onClick={closeMenu}>من نحن</a>
          <a href="#contact" onClick={closeMenu}>تواصل معنا</a>
        </nav>

        <a href="#contact" className="nav-cta">
          ابدأ مشروعك <span>↗</span>
        </a>
      </header>

      <section className="hero" id="home">

        <div className="hero-content">
          <span className="eyebrow">
            INDEPENDENT CREATIVE DIGITAL STUDIO
          </span>

          <h1>
            نصنع أفكارًا
            <br />
            <span>تترك أثرًا.</span>
          </h1>

          <p>
            نحن MELVON، مساحة إبداعية تجمع بين التصميم
            والتكنولوجيا والخيال لتحويل الأفكار إلى تجارب
            رقمية استثنائية.
          </p>

          <div className="hero-actions">
            <a href="#services" className="primary-button">
              اكتشف عالمنا <span>↗</span>
            </a>

            <a href="#about" className="secondary-button">
              تعرّف علينا
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot"></span>
            CREATIVITY WITHOUT LIMITS
          </div>
        </div>

        <div className="hero-art">
          <div className="art-orbit orbit-one"></div>
          <div className="art-orbit orbit-two"></div>

          <div className="art-circle"></div>

          <div className="art-card">
            <span className="art-symbol">✳</span>
            <strong>M</strong>
            <small>IMAGINE. CREATE. INSPIRE.</small>
          </div>

          <div className="art-caption">
            <span>EST.</span>
            <strong>2026</strong>
          </div>

          <div className="art-index">M — 001</div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line"></span>
          <span>01 / 04</span>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label">
          <span>01 — ABOUT MELVON</span>
          <span>الفكرة تبدأ من هنا</span>
        </div>

        <h2>
          لا نكتفي بصناعة
          <span> التصميم،</span>
          <br />
          بل نصنع
          <span> الانطباع.</span>
        </h2>

        <div className="intro-bottom">
          <p>
            نؤمن أن كل فكرة عظيمة تستحق أن تظهر بصورة استثنائية.
            لذلك نجمع بين الرؤية الإبداعية والتفكير الاستراتيجي
            لنقدم أعمالًا رقمية تحمل قيمة حقيقية.
          </p>

          <div className="intro-mark">
            <span>BEYOND</span>
            <strong>THE</strong>
            <span>ORDINARY.</span>
          </div>
        </div>
      </section>

      <section className="services" id="services">

        <div className="section-label">
          <span>02 — WHAT WE DO</span>
          <span>خدماتنا</span>
        </div>

        <div className="services-heading">
          <h2>مساحة للإبداع<br /><span>بلا حدود.</span></h2>
          <p>
            من الفكرة الأولى إلى التجربة النهائية،
            نصنع حلولًا إبداعية تواكب طموح علامتك التجارية.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>

              <div>
                <small>{service.subtitle}</small>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <span>03 — OUR PHILOSOPHY</span>

        <h2>
          THINK DIFFERENT.
          <br />
          <span>CREATE BEYOND.</span>
        </h2>

        <p>
          الإبداع ليس مجرد شكل جميل،
          بل فكرة ذكية وتجربة تترك أثرًا.
        </p>
      </section>

      <section className="contact-section" id="contact">
        <span className="eyebrow">LET'S CREATE SOMETHING GREAT</span>

        <h2>
          لديك فكرة؟
          <br />
          <span>لنصنعها معًا.</span>
        </h2>

        <p>
          كل مشروع استثنائي يبدأ بمحادثة.
          أخبرنا عن رؤيتك، ودعنا نبدأ من هناك.
        </p>

        <a href="mailto:" className="primary-button">
          تواصل معنا <span>↗</span>
        </a>
      </section>

      <footer className="footer">
        <div className="footer-main">
          <a href="#home" className="logo">
            MELVON<span>.</span>
          </a>

          <p>نحوّل الخيال إلى واقع رقمي.</p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MELVON STUDIO</span>
          <span>IMAGINE. CREATE. INSPIRE.</span>
          <a href="#home">العودة للأعلى ↑</a>
        </div>
      </footer>

    </main>
  );
}

export default App;
