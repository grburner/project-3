/* eslint-disable react/prop-types */
import React, {useState, useContext, useEffect} from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

import ProductContext from '../../../utils/ProductContext';
import API from '../../../utils/API';

function Filters(props){

  const products = useContext(ProductContext);

  const [maxPrice, setMaxPrice] = useState({});

  const [retailers, setRetailers] = useState([]);

  let stores = [];

  useEffect(() => {
    // Find max price and array of stores from products table return
    if(products.length >= 1) {
      let max = 0;
      let tempArray = [];
      for(let i = 0; i < products.length; i++){
        // Get max price
        if(products[i].price > max){
          max = products[i].price;
        }

        // Get array of retailers
        if(!stores.includes(products[i])){
          tempArray.push(products[i].retailer_id)
        }
      }
      // Set max price
      setMaxPrice({
        maxPrice: Math.round(max)
      });

      // Set retailers array
      for(let i = 0; i < tempArray.length; i++){
        // console.log(tempArray[i])
        API.findRetailerById(tempArray[i])
        .then(res => {
          // This returns HTML, not a retailer
        })
        .catch(err => console.log(err));
      }
    }
    // Find store
  },[products]);


  return (
    
    <div className="filter-wrapper">
      <Container>
        <p className="filter-header">Filter Your Search:</p>
        <Row>
          <Col md>
            <label htmlFor="priceRange">Max Price: {props.filters.priceMax === 0 ? '$' + maxPrice.maxPrice : '$' + props.filters.priceMax}</label>
            <input name="priceMax" type="range" className="custom-range" id="priceRange" min="0" max={maxPrice.maxPrice} onChange={props.filterChange}/>
          </Col>
          <Col md>
            <label htmlFor="items">Store: {props.filters.type}</label><br/>
            <select name="store"  id="items" onChange={props.filterChange}>
              <option value="">   </option>
            </select>
          </Col>
          <Col md>
            <label htmlFor="items">Type: {props.filters.type}</label><br/>
            <select name="type"  id="items" onChange={props.filterChange}>
              <option value="">   </option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
              <option value="Orange">Orange</option>
            </select>
          </Col>
          <Col md>
            <label htmlFor="items">Style: {props.filters.style}</label><br/>
            <select  name="style" id="items" onChange={props.filterChange}>
              <option value="">   </option>
              <option value="Sparkling">Sparkling</option>
              <option value="Still">Still</option>
              <option value="Fortified">Fortified</option>
            </select>
          </Col>
          <Col md>
            <Button onClick={props.filterReset}>Reset</Button>
          </Col>
        </Row>
      </Container>
    </div>
        
  );
}
  
export default Filters;