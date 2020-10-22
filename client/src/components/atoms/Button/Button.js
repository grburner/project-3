import React, {useState} from 'react';
import './style.css';

import Button from 'react-bootstrap/Button';

function customButton({children, href, onClick}){

  const [hoverState, setHover] = useState(false);

  return (
    <div className="buttonWrapper">
      <button
      href={href} 
      onClick={onClick} 
      className={hoverState ? "main-button-hover" : "main-button"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      >
        {children}
      </button>
    </div>
  );
}

export default customButton;