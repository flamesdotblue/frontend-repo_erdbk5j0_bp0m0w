import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/30 selection:text-white">
      {/* Subtle animated background grid */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      {/* Aurora glow */}
      <div className="pointer-events-none fixed -z-0 inset-0">
        <div className="absolute left-1/2 top-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}
