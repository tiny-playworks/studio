import type { StudioProject } from '../data/projects';

interface ProjectTooltipProps {
  project: StudioProject;
}

export function ProjectTooltip({ project }: ProjectTooltipProps) {
  return (
    <span className={`project-tooltip project-tooltip--${project.hotspot.align}`}>
      <span className="project-tooltip__place">{project.place}</span>
      <strong>{project.name}</strong>
      <span>{project.status}</span>
      <span>{project.description}</span>
      <em>{project.hrefLabel}</em>
    </span>
  );
}
