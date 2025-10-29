import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
      {/* subtle background grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />

      <Navbar />
      <main>
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}
