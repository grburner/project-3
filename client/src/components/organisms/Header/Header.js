import React from 'react';
import './style.css';

import Logo from '../../atoms/Logo/Logo';
import Headline from '../../atoms/Headline/Headline';
import Button from '../../atoms/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
  return (
    <header>
      <Row>
        <Col><Logo /></Col>
        <Col><Headline /></Col>
        <Col><Button href="/signup" variant="white">Sign Up</Button></Col>
      </Row>
    </header>
  );
}
  
export default Header;