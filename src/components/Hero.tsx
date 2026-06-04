import { site } from '../data/content';

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="uppercase">
              Full Stack <br />
              <span className="hero__title-muted">Dev.</span>
            </h1>
            <p className="hero__desc">{site.tagline}</p>
            <div className="hero__actions" style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '3rem' }}>
              <button
                className="btn btn--primary"
                onClick={() => scrollTo('projects')}
                style={{ borderRadius: '0', padding: '1rem 2.5rem' }}
              >
                View Work
              </button>
              <a
                href="/Jerusalem-Girma-Resume.pdf"
                download
                className="btn btn--primary"
                style={{ borderRadius: '0', padding: '1rem 2.5rem' }}
              >
                Download CV
              </a>
              <button
                onClick={() => scrollTo('contact')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--ink)',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  textDecoration: 'underline',
                  textUnderlineOffset: '10px',
                  cursor: 'pointer'
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero__avatar-container">
            <div className="avatar-frame">
              <div className="avatar-circle">
                <img
                  src="/images/photo_2026-05-25_21-12-28.jpg"
                  alt="Jerusalem Girma portrait"
                  style={{ objectPosition: 'center 20%' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jerusalem';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
