import React from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

function Filters(){

  return (
    <div>
      <Container>
        <p>Filters</p>
        <Row>
          <Col md>
            <Button>Price</Button>
          </Col>
          <Col md>
            <Button>Store</Button>
          </Col>
          <Col md>
            <Button>Type 1</Button>
          </Col>
          <Col md>
            <Button>Type 2</Button>
          </Col>
              
        </Row>
      </Container>
    </div>
  );
}
  
export default Filters;