import React from 'react';
import './style.css';
import logo from '../../../images/winehub-logo-500px.png'

function Logo(){
  return (
    <div className="logo-wrapper">
      <a href="/">
        <img src={logo} />
      </a>
    </div>
  );
}
  
export default Logo;