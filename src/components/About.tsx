import { about } from '../data/content';

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }} className="about-layout">
          <div className="about-title-side">
            <h2 className="section-title uppercase" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 0.9 }}>
              About <br />
              Jerusalem
            </h2>
          </div>

          <div className="about-content-side">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', textTransform: 'none', fontWeight: 600 }}>
              Software Engineering Student
            </h3>

            <div style={{ color: 'var(--ink-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '4rem' }}>
              {about.paragraphs[0]}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <div className="section-label uppercase tracking-widest" style={{ marginBottom: '0.75rem', fontSize: '0.65rem' }}>
                  01 EDUCATION
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                  ASTU / 2021 - Present
                </div>
              </div>
              <div>
                <div className="section-label uppercase tracking-widest" style={{ marginBottom: '0.75rem', fontSize: '0.65rem' }}>
                  02 APPROACH
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>
                  Efficient / Adaptive / Scalable
                </div>
              </div>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <a href="/Jerusalem-Girma-Resume.pdf" download className="btn btn--outline" style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
                Download Resume / CV →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
