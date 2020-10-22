import React, {useState, useContext, useEffect} from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

import ProductContext from "../../../utils/ProductContext"

function Filters(props){

  const products = useContext(ProductContext);

  const [maxPrice, setMaxPrice] = useState({})

  useEffect(() => {
    // Find max price from products
    if(products.length >= 1) {
      let max = 0;
      for(let i = 0; i < products.length; i++){
        if(products[i].price > max){
          max = products[i].price
        }
      }
      setMaxPrice({
        maxPrice: Math.round(max)
      })
    }
  },[products]);


  return (
    <div>
      <Container>
        <p>Filters</p>
        <Row>
          <Col md>
          <label for="priceRange">Max Price: {props.filters.priceMax === 0 ? maxPrice.maxPrice : props.filters.priceMax}</label>
          <input name="priceMax" type="range" class="custom-range" id="priceRange" min="0" max={maxPrice.maxPrice} onChange={props.filterChange}/>
          </Col>
          <Col md>
            <label for="items">Store: {props.filters.type}</label><br/>
            <select name="store"  id="items" onChange={props.filterChange}>
              <option value="">   </option>
            </select>
          </Col>
          <Col md>
            <label for="items">Type: {props.filters.type}</label><br/>
            <select name="type"  id="items" onChange={props.filterChange}>
              <option value="">   </option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
              <option value="Orange">Orange</option>
            </select>
          </Col>
          <Col md>
          <label for="items">Style: {props.filters.style}</label><br/>
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