import { skills } from '../data/content';

export function Skills() {
  const webSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }} className="skills-layout">
          <div>
            <h2 className="section-title uppercase" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 0.9 }}>
              Technical <br />
              Stack
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div>
              <div className="section-label uppercase tracking-widest" style={{ marginBottom: '0.75rem', fontSize: '0.65rem' }}>
                01 WEB
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {webSkills.map(skill => (
                  <div key={skill.name} style={{ fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>
                    {skill.name}
                  </div>
                ))}
                {/* Adding Next.js and Tailwind if they weren't explicitly in her list but are in the reference */}
                <div style={{ fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>Next.js</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>Node.js</div>
              </div>
            </div>

            <div>
              <div className="section-label uppercase tracking-widest" style={{ marginBottom: '0.75rem', fontSize: '0.65rem' }}>
                02 BACKEND
              </div>
              <div style={{ width: '100%', height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {backendSkills.map(skill => (
                  <div key={skill.name} style={{ fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>
                    {skill.name}
                  </div>
                ))}
                <div style={{ fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>PostgreSQL</div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem', textTransform: 'uppercase' }}>MySQL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
