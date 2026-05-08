import { motion } from 'framer-motion';
import { studioNotes } from '../data/studio';

export function NotesSection() {
  return (
    <section className="section section--notes">
      <div className="section__heading">
        <span>Notes</span>
        <p>small traces from the workbench</p>
      </div>

      <div className="notes-list">
        {studioNotes.map((note, index) => (
          <motion.p
            key={note}
            className="notes-list__item"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            {note}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
