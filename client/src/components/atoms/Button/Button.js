import React, {useState} from 'react';
import './style.css';

// import Button from 'react-bootstrap/Button';

function customButton({children, href, onClick, variant, width}){

  const [hoverState, setHover] = useState(false);
  if(variant === 'white'){
    return (
      <div className="buttonWrapper">
        <a href={href}>
          <button
            onClick={onClick} 
            className={hoverState ? 'main-button-white-hover' : 'main-button-white'}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {children}
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div className="buttonWrapper">
        <a href={href}>
          <button
            onClick={onClick} 
            className={hoverState ? 'main-button-hover' : 'main-button'}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {children}
          </button>
        </a>
      </div>
    );
  }
}

export default customButton;