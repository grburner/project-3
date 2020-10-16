import React, {useContext} from 'react';
import './style.css';

import Item from '../../organisms/Item/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import API from '../../../utils/API';

import ProductContext from '../../../utils/ProductContext'

function Marketplace(){

  const products = useContext(ProductContext);

  const seed = [];

  for(let i = 0; i < products.length; i++){
    seed.push(products[i])
  }

  return (
    <div className="container marketplace">
      <h3>Marketplace</h3>
      <Row>
        {seed.map((x,i)=>{
          // console.log(x)
          return (
            <Col lg={3} md={6} sm={12} style={{marginBottom: "20px"}}>
              <Item value={x}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );

}
  
export default Marketplace;