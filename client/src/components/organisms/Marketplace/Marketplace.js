import React, {useContext, useEffect} from 'react';
import './style.css';

import Item from '../../organisms/Item/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import API from '../../../utils/API';

import ProductContext from '../../../utils/ProductContext';

function Marketplace(props){

  const products = useContext(ProductContext);

  const seed = [];

    if(props.filters.priceMax !== 0 || props.filters.store !== "" || props.filters.type !== "" || props.filters.style !== "") {
      for(let i = 0; i < products.length; i++){
        if(props.filters.priceMax !== 0 ){
          if(products[i].price < props.filters.priceMax){
            seed.push(products[i]);
          }
        }
      }
    } else {
      for(let i = 0; i < products.length; i++){
        seed.push(products[i]);
      }
    }

  // props.filters
  // priceMax: 0,
  // store: "",
  // type: "",
  // style: "",
  

  return (
    <div className="container marketplace">
      <h3>Marketplace</h3>
      <Row>
        {seed.map((x,i)=>{
          // console.log(x)
          return (
            <Col lg={3} md={6} sm={12} style={{marginBottom: '20px'}}>
              <Item value={x}/>
            </Col>
          );
        })}
      </Row>
    </div>
  );

}
  
export default Marketplace;