import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { studioProjects } from '../data/projects';
import { MobileProjectList } from './MobileProjectList';
import { type CoverImageLayout, WorldHotspots } from './WorldHotspots';

function readPositionPercent(value: string, axis: 'x' | 'y') {
  if (value.endsWith('%')) {
    return Number.parseFloat(value) / 100;
  }

  if (value === 'left' || value === 'top') {
    return 0;
  }

  if (value === 'right' || value === 'bottom') {
    return 1;
  }

  if (value === 'center') {
    return 0.5;
  }

  return axis === 'x' ? 0.5 : 0.5;
}

export function HeroWorld() {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLayout, setImageLayout] = useState<CoverImageLayout | null>(null);
  const gameWeekly = studioProjects.find((project) => project.name === 'Game Weekly');

  const updateImageLayout = useCallback(() => {
    const image = imageRef.current;

    if (!image || !image.naturalWidth || !image.naturalHeight) {
      return;
    }

    const rect = image.getBoundingClientRect();
    const style = window.getComputedStyle(image);
    const [x = '50%', y = '50%'] = style.objectPosition.split(' ');
    const scale = Math.max(rect.width / image.naturalWidth, rect.height / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    const extraX = rect.width - width;
    const extraY = rect.height - height;

    setImageLayout({
      left: rect.left + extraX * readPositionPercent(x, 'x'),
      top: rect.top + extraY * readPositionPercent(y, 'y'),
      width,
      height,
    });
  }, []);

  useEffect(() => {
    updateImageLayout();

    const image = imageRef.current;
    const resizeObserver = new ResizeObserver(updateImageLayout);

    if (image) {
      resizeObserver.observe(image);
    }

    window.addEventListener('resize', updateImageLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateImageLayout);
    };
  }, [updateImageLayout]);

  return (
    <main className="hero-world">
      <img
        ref={imageRef}
        className="hero-world__image"
        src="/assets/world-hero.png"
        alt=""
        aria-hidden="true"
        onLoad={updateImageLayout}
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
        {gameWeekly ? (
          <a className="hero-world__enter" href={gameWeekly.href} target="_blank" rel="noreferrer">
            Open Weekly
          </a>
        ) : null}
      </motion.section>

      <WorldHotspots imageLayout={imageLayout} />
      <MobileProjectList />
    </main>
  );
}
