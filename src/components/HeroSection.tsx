import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="hero">
      <motion.div
        className="hero__brand"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p>tiny-playworks</p>
        <p>浮生实验室</p>
      </motion.div>

      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
      >
        <h1>
          Small games, playful experiments,
          <br />
          and tiny digital worlds.
        </h1>
        <a className="hero__enter" href="#islands">
          Enter Studio
        </a>
      </motion.div>
    </section>
  );
}
