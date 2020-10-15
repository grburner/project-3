import React from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

function Item(props){

  return (
    <a href={props.value.link}>
      <div className="item">
      
        <img src={props.value.image} />
        <p>{props.value.title}</p>
        <p>{props.value.price}</p>
      
      </div>
    </a>
  );
}
  
export default Item;