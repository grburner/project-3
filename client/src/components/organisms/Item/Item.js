import React from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';
import { useHistory } from 'react-router-dom';

function Item(props){
  let history = useHistory();

  //hrefs are clearing global state but useHistory is throwing an error in filters
  const handleClick = () => {
    history.push('/product/' + props.value._id)
  }
  
  const link = '/product/' + props.value._id;
  let image = '';
  if(props.value.image === undefined){
    image = 'https://menageatroiswines.com/sites/default/files/MAT_Redblend_new.png';
  } else {
    image = props.value.image;
  }
  
  return (
    <a href={link} className="item-link">
    {/* <a onClick={handleClick} className="item-link"> */}
      <div className="item">
        <div style={{backgroundImage: 'url('+ image + ')' }} className="item-image">&nbsp;</div>
        <div style={{padding:'5px', height:'100%'}}>
          <p>{props.value.name}</p>
          <p>${props.value.price}</p>
          <p style={{margin:'5px', padding:'0'}}>&nbsp;</p>
          <div style={{position:'absolute', bottom:'0', marginTop:'50px', width:'85%'}}>
            {/* <Button href={handleClick} width="100%">View</Button> */}
            <Button href={link} width="100%">View</Button>
          </div>
        </div>
        
      </div>
    </a>
  );
}
  
export default Item;