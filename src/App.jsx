import { render } from 'solid-js/web';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Installation from './components/Installation';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div class="app">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <Installation />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;