import React, {useState} from 'react';
import './style.css';

import Button from 'react-bootstrap/Button';

function customButton({children, href}){


  
  return (
    <div className="buttonWrapper">
    <Button href={href} variant="outline-danger">{children}</Button>
    </div>
  );
}

export default customButton;