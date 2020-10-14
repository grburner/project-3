import React, {useState} from 'react';
import '../Button/Button.css';

function Button(){
  const [hoverState, setHover] = useState(false);

  return (
    <div className="buttonWrapper">
      <button 
        className={hoverState ? 'hover-class cta' : 'cta'}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={()=>buttonClick(url)}
      >
        {children}
      </button>
    </div>
  );
}
  
export default Button;