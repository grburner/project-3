import React from 'react';
import './style.css';
import logo from '../../../images/winehub-logo-white-500px.png';
import { useHistory } from 'react-router-dom';

function Logo(){
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div className="logo-wrapper">
      <a onClick={handleClick}>
        <img src={logo} />
      </a>
    </div>
  );
}
  
export default Logo;