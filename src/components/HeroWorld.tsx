import { motion } from 'framer-motion';
import { MobileProjectList } from './MobileProjectList';
import { WorldHotspots } from './WorldHotspots';

export function HeroWorld() {
  return (
    <main className="hero-world">
      <img
        className="hero-world__image"
        src="/assets/world-hero.png"
        alt=""
        aria-hidden="true"
      />
      <div className="hero-world__light" aria-hidden="true" />
      <motion.div
        className="hero-world__brand"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span>tiny-playworks</span>
        <span>浮生实验室</span>
      </motion.div>

      <motion.section
        className="hero-world__menu"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
      >
        <h1>
          Small games, playful experiments,
          <br />
          and tiny digital worlds.
        </h1>
        <a className="hero-world__enter" href="#projects">
          Enter Studio
        </a>
      </motion.section>

      <WorldHotspots />
      <MobileProjectList />
    </main>
  );
}
