import { motion } from 'framer-motion';
import { studioProjects } from '../data/studio';

const accentClassName: Record<string, string> = {
  sand: 'island-card--sand',
  sage: 'island-card--sage',
  rose: 'island-card--rose',
  sky: 'island-card--sky',
  lavender: 'island-card--lavender',
};

export function IslandCluster() {
  return (
    <section id="islands" className="section section--islands">
      <div className="section__heading">
        <span>Floating Islands</span>
        <p>little worlds, each drifting in its own weather</p>
      </div>

      <div className="island-map">
        {studioProjects.map((project, index) => (
          <motion.a
            key={project.name}
            className={`island-card island-card--${project.size} ${accentClassName[project.accent]}`}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            style={
              {
                '--desktop-top': project.position.desktop.top,
                '--desktop-left': project.position.desktop.left,
                '--mobile-top': project.position.mobile.top,
                '--mobile-left': project.position.mobile.left,
              } as React.CSSProperties
            }
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <span className="island-card__status">{project.status}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
