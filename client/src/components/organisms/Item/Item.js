import React from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

function Item(props){
  const link = '/product/' + props.value._id;
  let image = '';
  console.log(props.value.image)
  if(props.value.image === undefined){
    image = 'https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png';
  } else {
    image = props.value.image
  }
  
  return (
    <a href={link} className="item-link">
      <div className="item">
        <div style={{backgroundImage: 'url('+ image + ')' }} className="item-image">&nbsp;</div>
        <div style={{padding:'5px', height:'100%'}}>
          <p>{props.value.name}</p>
          <p>${props.value.price}</p>
          <p style={{margin:'5px', padding:'0'}}>&nbsp;</p>
          <div style={{position:'absolute', bottom:'0', marginTop:'50px', width:'85%'}}>
            <Button href={link} width="100%">View</Button>
          </div>
        </div>
        
      </div>
    </a>
  );
}
  
export default Item;