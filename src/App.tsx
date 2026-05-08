import { BackgroundScene } from './components/BackgroundScene';
import { HeroSection } from './components/HeroSection';
import { IslandCluster } from './components/IslandCluster';
import { NotesSection } from './components/NotesSection';
import { AboutSection } from './components/AboutSection';

export default function App() {
  return (
    <main className="app-shell">
      <BackgroundScene />
      <HeroSection />
      <IslandCluster />
      <NotesSection />
      <AboutSection />
    </main>
  );
}
