import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="section section--about">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7 }}
      >
        <p>Not a startup.</p>
        <p>Not a company.</p>
        <br />
        <p>Just one person building</p>
        <p>small digital things.</p>
      </motion.div>
    </section>
  );
}
