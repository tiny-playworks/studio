import { motion } from 'framer-motion';
import { studioProjects } from '../data/projects';
import { ProjectTooltip } from './ProjectTooltip';

export interface CoverImageLayout {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface WorldHotspotsProps {
  imageLayout: CoverImageLayout | null;
}

export function WorldHotspots({ imageLayout }: WorldHotspotsProps) {
  return (
    <div className="world-hotspots" aria-label="Studio projects">
      {studioProjects.map((project, index) => (
        <motion.a
          key={project.name}
          className="world-hotspot"
          href={project.href}
          target={project.href.startsWith('#') ? undefined : '_blank'}
          rel={project.href.startsWith('#') ? undefined : 'noreferrer'}
          aria-label={`${project.name}: ${project.status}`}
          style={
            {
              '--x': imageLayout
                ? `${imageLayout.left + (imageLayout.width * project.hotspot.x) / 100}px`
                : `${project.hotspot.x}%`,
              '--y': imageLayout
                ? `${imageLayout.top + (imageLayout.height * project.hotspot.y) / 100}px`
                : `${project.hotspot.y}%`,
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
