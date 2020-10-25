import React, {useContext, useEffect} from 'react';
import './style.css';

import Item from '../../organisms/Item/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import API from '../../../utils/API';

import ProductContext from '../../../utils/ProductContext';

function Marketplace(props){

  const products = useContext(ProductContext);

  let seed = [];

  const loadProducts = () => {
    for(let i = 0; i < products.length; i++){
      seed.push(products[i]);
    }
  };

  if(props.filters.priceMax === 0 || props.filters.store === '' || props.filters.type === '' || props.filters.style === '') {
    loadProducts();
  }

  if(props.filters.priceMax !== 0) {
    console.log(seed);
    let newArray = seed.filter(function(num){
      return num.price < props.filters.priceMax;
    });
    seed = newArray;
  }

  if(props.filters.type !== '') {
    let newArray = seed.filter(function(num){
      return num.type1.toUpperCase() === props.filters.type.toUpperCase();
    });
    seed = newArray;
  }

  if(props.filters.style !== '') {
    let newArray = seed.filter(function(num){
      return num.type2.toUpperCase() === props.filters.style.toUpperCase();
    });
    seed = newArray;
  }

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