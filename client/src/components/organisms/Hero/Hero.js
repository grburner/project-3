import React from 'react';
import './style.css';

import Search from '../../molecules/Search/Search';

function Hero(){
  
  return (
    <div className="hero">
      <p className="hero-callout">Find your perfect wine:</p>
      <Search />
    </div>
  );
}

export default Hero;