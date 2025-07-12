import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Header from './components/Header';
import Hero from './components/Hero';
import GameFeatures from './components/GameFeatures';
import Media from './components/Media';
import News from './components/News';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Router>
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <GameFeatures />
                <Media />
                <News />
              </main>
            } />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;