import { useState } from 'react';
import { projects } from '../data/content';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <SectionHeader label="Portfolio" title="Selected Work" />

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <article key={project.id} className="project-card">
              <div
                className="project-card__img"
                style={{ backgroundColor: project.accent + '22' }}
              >
                {/* Minimalist visual representation if no image */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'grid',
                  placeItems: 'center',
                  color: project.accent,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  opacity: 0.5
                }}>
                  {`// 0${index + 1} ${project.title}`}
                </div>
              </div>

              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>

              <div className="project-card__tags">
                {project.tech.map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>

              <div className="project-card__links" style={{ display: 'flex', gap: '1.5rem' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  GitHub →
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Live Site →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {projects.length > 2 && (
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <button
              className="btn btn--outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
