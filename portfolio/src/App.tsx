import { About } from './components/About';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { FloatingNav } from './components/FloatingNav';

function App() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer style={{ padding: '6rem 0 8rem', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '3rem' }}>
          <div>
            <div className="section-label uppercase tracking-widest" style={{ marginBottom: '1.5rem', fontSize: '0.65rem' }}>
              Social Connections
            </div>
            <div style={{ display: 'flex', gap: '2rem', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <a href="https://github.com/laviee143" target="_blank" rel="noopener noreferrer" className="hover-underline">Github</a>
              <a href="http://linkedin.com/in/jerusalem-girma-a3771b375" target="_blank" rel="noopener noreferrer" className="hover-underline">Linkedin</a>
              <a href="https://t.me/larsen143" target="_blank" rel="noopener noreferrer" className="hover-underline">Telegram</a>
            </div>
          </div>

          <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <p className="uppercase tracking-widest" style={{ fontSize: '0.85rem', fontWeight: 700 }}>
              © {new Date().getFullYear()} Jerusalem Girma
            </p>
            <p className="uppercase tracking-widest" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--ink-muted)' }}>
              Handcrafted in Ethiopia
            </p>
          </div>
        </div>
      </footer>

      <FloatingNav />
    </>
  );
}

export default App;
