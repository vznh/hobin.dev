import { useState, useEffect } from 'react';
import ConstantArrow from './components/ConstantArrow';
import TerminalSection from './components/TerminalSection';
import Typewriter from './components/Typewriter';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  const [showImage, setShowImage] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#06090C');
  const [section, setSection] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionIndex = Math.floor(scrollPosition / windowHeight);

    const sectionColors = ['#06090C', '#16161d', '#343D46']
    setBackgroundColor(sectionColors[sectionIndex] || sectionColors[sectionColors.length - 1]);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  // TODO: later
  const handleEasterEgg = () => {
    setShowImage();
  }

  return (
    <div className="wrapper" style={{backgroundColor: backgroundColor, transition: 'background-color 2.0s ease'}}>
      {section === 0 && (
      <>
      <ConstantArrow />
      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 'lighter', color: '#fff', }}>hi i'm <span>Jason</span></h1>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'normal', color: '#fff', opacity: 0.5 }}>.. what do i do?</h3>
        <Typewriter />
      </main>
      <section className="second" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
          <TerminalSection />
      </section>

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
        <div style={{
          width: '80%',
          height: '80%',
          border: '1px solid #ddd',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        </div>
      </section>

      <section style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10vh',
      }}>
        <NavBar />
      </section>
      </>
      )}
    </div>
  );
}

export default App;
