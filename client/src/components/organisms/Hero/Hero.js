import React from 'react';
import './style.css';

function Hero({children}){
  
  return (
    <div className="hero">
      <p className="hero-callout">Find your perfect wine:</p>
      {children}
    </div>
  );
}

export default Hero;