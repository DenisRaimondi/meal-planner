import React from 'react';
import { FaUtensils } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <FaUtensils className="header-icon" />
        <h1>Piano Alimentare</h1>
      </div>
      <p className="header-subtitle">Personalizzato per la tua salute</p>
    </header>
  );
};

export default Header;