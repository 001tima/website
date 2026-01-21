import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ResumeButton from './components/ResumeButton';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-rose-50">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeButton />
      <Contact />
    </div>
  );
}

export default App;
