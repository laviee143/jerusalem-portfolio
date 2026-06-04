import { navLinks, site } from '../data/content';

export function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__copy">
          © {year} {site.name} — Built with React &amp; Vite
        </p>

        <nav className="site-footer__links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className="site-footer__link"
              onClick={() => handleNav(link.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              {link.label}
            </button>
          ))}
          <a
            className="site-footer__link"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </footer>
  );
}
