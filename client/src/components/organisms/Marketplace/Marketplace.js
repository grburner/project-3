import React, {useState, useContext, useEffect} from 'react';
import './style.css';

import Item from '../../organisms/Item/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../../../utils/API';
import Button from '../../atoms/Button/Button'

import ProductContext from '../../../utils/ProductContext';

function Marketplace(props){

  const products = useContext(ProductContext);
  
  const [limit, setLimit] = useState({
    value: 20
  });

  const showMore = () => {
    setLimit({
      value: limit.value + 8
    })
  }

  let seed = [];

  const loadProducts = () => {
    for(let i = 0; i < products.length; i++){
      if (products[i].status === 'live') {
        seed.push(products[i]);
      }
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

  if(props.filters.store !== '') {
    let newArray = seed.filter(function(x){
      return x.retailer_id === props.filters.store;
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
          if(i < limit.value){
            return (
              <Col lg={3} md={6} sm={12} style={{marginBottom: '20px'}}>
                <Item value={x}/>
              </Col>
            );
          }
        })}
      </Row>
      <Row>
        <Col>
        <Button onClick={showMore} fullwidth="true">Load More</Button>
        </Col>
      </Row>
    </div>
  );

}
  
export default Marketplace;