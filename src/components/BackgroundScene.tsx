import { motion } from 'framer-motion';

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  top: `${6 + (index % 6) * 12}%`,
  left: `${4 + ((index * 11) % 88)}%`,
  delay: index * 0.35,
  duration: 7 + (index % 4) * 1.4,
}));

export function BackgroundScene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="scene__wash" />
      <motion.div
        className="scene__cloud scene__cloud--far"
        animate={{ x: ['-3%', '3%', '-3%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="scene__cloud scene__cloud--near"
        animate={{ x: ['2%', '-2%', '2%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="scene__island scene__island--left"
        animate={{ y: [0, -12, 0], rotate: [0, -1.2, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="scene__island scene__island--right"
        animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="scene__particle"
          style={{ top: particle.top, left: particle.left }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.15, 0.65, 0.15],
            scale: [0.9, 1.15, 0.9],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
