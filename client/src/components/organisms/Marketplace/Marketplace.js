import React, {useState, useContext, useEffect} from 'react';
import './style.css';

import Item from '../../organisms/Item/Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../../../utils/API';
import Button from '../../atoms/Button/Button';
import CartToast from '../CartToast';

import ProductContext from '../../../utils/ProductContext';

import { store } from '../../../utils/GlobalState';

function Marketplace(props){
  const globalState = useContext(store);
  const { dispatch } = globalState;
  let userId = globalState.state.userId;

  const products = useContext(ProductContext);
  
  const [limit, setLimit] = useState({
    value: 20
  });

  const showMore = () => {
    setLimit({
      value: limit.value + 8
    });
  };

  let seed = [];

  const loadProducts = () => {
    for(let i = 0; i < products.length; i++){
      if (products[i].status === 'live' && products[i].units > 0) {
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
    <div>
      <div className={seed.length < 1 ? 'hide' : 'marketplace show'}>
        <h3 className="marketplace-header">Wine Marketplace</h3>
        <CartToast />
        <Row>
          {seed.map((x,i)=>{
            if(i < limit.value){
              return (
                <Col xl={3} lg={4} md={6} sm={6} xs={12} style={{marginBottom: '20px'}}>
                  <Item value={x} />
                </Col>
              );
            }
          })}
        </Row>
        <Row>
          <Col>
            {products.length > limit.value ? <Button onClick={showMore} fullwidth="true">Load More</Button> : ''}
          </Col>
        </Row>
      </div>
      <div className={seed.length < 1 ? 'show' : 'hide'}><h1 className="sorry">Sorry, No Search Results</h1></div>
    </div>
  );

}
  
export default Marketplace;