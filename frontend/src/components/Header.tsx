import React from 'react';
import '../App.css';

interface HeaderProps {
  text: string;
}

const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <div>
      <header className="app-header">
        { text }
      </header>
    </div>
  );
}

export default Header;
