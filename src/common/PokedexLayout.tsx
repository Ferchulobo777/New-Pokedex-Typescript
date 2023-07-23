import React, { useState } from 'react';
import '../common/PokedexLayout.css';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const PokedexLayout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'layout dark-mode' : 'layout light-mode'}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PokedexLayout;