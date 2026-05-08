import { motion } from 'framer-motion';
import { studioProjects } from '../data/projects';
import { ProjectTooltip } from './ProjectTooltip';

export function WorldHotspots() {
  return (
    <div className="world-hotspots" aria-label="Studio projects">
      {studioProjects.map((project, index) => (
        <motion.a
          key={project.name}
          className="world-hotspot"
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.name}: ${project.status}`}
          style={
            {
              '--x': `${project.hotspot.x}%`,
              '--y': `${project.hotspot.y}%`,
            } as React.CSSProperties
          }
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 + index * 0.08 }}
        >
          <span className="world-hotspot__ring" />
          <span className="world-hotspot__dot" />
          <ProjectTooltip project={project} />
        </motion.a>
      ))}
    </div>
  );
}
