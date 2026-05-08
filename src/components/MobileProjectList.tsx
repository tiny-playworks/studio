import { studioProjects } from '../data/projects';

export function MobileProjectList() {
  return (
    <section id="projects" className="mobile-projects" aria-label="Studio projects">
      {studioProjects.map((project) => (
        <a
          key={project.name}
          className="mobile-project"
          href={project.href}
          target={project.href.startsWith('#') ? undefined : '_blank'}
          rel={project.href.startsWith('#') ? undefined : 'noreferrer'}
        >
          <span>{project.name}</span>
          <small>{project.hrefLabel}</small>
        </a>
      ))}
    </section>
  );
}
