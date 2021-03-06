import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';

function Headline(){
  let history = useHistory();

  const handleClick = () => {
    history.push('/');
  }
  
  return (
    <h1 className="headline">
      <a onClick={handleClick}>WineHub</a>
    </h1>
  );
}
  
export default Headline;