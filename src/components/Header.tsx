import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/content';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a
          href="#hero"
          className="site-header__brand"
          onClick={(e) => { e.preventDefault(); handleNav('hero'); }}
        >
          <span className="site-header__monogram" aria-hidden="true">JG</span>
          <span>{site.name.split(' ')[0]}</span>
        </a>

        <nav className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Main">
          <ul className="site-nav__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className="site-nav__link"
                  onClick={() => handleNav(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                className="site-nav__cta"
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
