import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Honors from './components/Honors';
import Research from './components/Research';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-600">
      <Navbar />
      <main className="mx-auto max-w-[1600px] px-4 pb-16 pt-8 sm:px-6 lg:px-12 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-14">
          <Hero />
          <div className="min-w-0">
            <About />
            <Education />
            <Projects />
            <Honors />
            <Research />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
