import React from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

function Item(props){
  const link = "/product/" + props.value._id
  const image = "https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png"
  return (
    <a href={link} className="item-link">
      <div className="item">
        <div style={{backgroundImage: "url("+ image + ")" }} className="item-image">&nbsp;</div>
        <p>{props.value.name}</p>
        <p>{props.value.price}</p>
      </div>
    </a>
  );
}
  
export default Item;