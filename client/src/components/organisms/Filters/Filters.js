/* eslint-disable react/prop-types */
import React, {useState, useContext, useEffect} from 'react';
import './style.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from '../../atoms/Button/Button';

import ProductContext from '../../../utils/ProductContext';
import API from '../../../utils/API';

import Stores from '../../atoms/Stores/index';

function Filters(props){

  const products = useContext(ProductContext);

  const [maxPrice, setMaxPrice] = useState({});

  const [retailers, setRetailers] = useState(['']);

  const [store, setStore] = useState('');

  
  let stores = [];

  useEffect(() => {
    let tempArray = [];
    // Find max price and array of stores from products table return
    if(products.length >= 1) {
      let max = 0;
      
      for(let i = 0; i < products.length; i++){
        // Get max price
        if(products[i].price > max){
          max = products[i].price;
        }

        // Get array of retailers
        if(!stores.includes(products[i])){
          tempArray.push(products[i].retailer_id);
        }
      }
      // Set max price
      setMaxPrice({
        maxPrice: Math.round(max)
      });

      // Set retailers array
      let retailerArray = [];
      for(let i = 0; i < tempArray.length; i++){
        API.findRetailerById(tempArray[i])
          .then(res => {
            if(!retailerArray.includes(res.data.company_name + '*' + res.data._id)){
              retailerArray.push(res.data.company_name + '*' + res.data._id);
            }
            props.filterReset();
          })
          .catch(err => console.log(err));
      }
      setRetailers(retailerArray);
    //  Promise.all(retailerArray).then(() => {props.filterReset();})
    }
  },[products]);

  useEffect(() => {
    // Set price slider to max when max price is loaded
    document.getElementById('priceRange').value = maxPrice.maxPrice;
  },[maxPrice]);

  return (
    
    <div className="filter-wrapper" id="filters">
      <Container fluid>
        <p className="filter-header">Filter Your Search:</p>
        <Row>
          <Col md>
            <div className="price-wrapper">
              <label htmlFor="priceRange">Max Price: {props.filters.priceMax === 0 ? '$' + maxPrice.maxPrice : '$' + props.filters.priceMax}</label>
              <input name="priceMax" type="range" className="custom-range" id="priceRange" min="0" max={maxPrice.maxPrice} onChange={props.filterChange}/>
            </div>
          </Col>
          <Col md>
            <label className="filter-label" htmlFor="itemsStore">Store:{store}</label>
            <select name="store"  id="itemsStore" onChange={props.filterChange}>
              <option value="">Store</option>
              {retailers.map((x, i)=>{
                return <option value={x.split('*')[1]}>{x.split('*')[0]}</option>;
              })}
            </select>
          </Col>
          <Col md>
            <label className="filter-label" htmlFor="itemsType">Type: {props.filters.type}</label>
            <select name="type"  id="itemsType" onChange={props.filterChange}>
              <option value="">Type</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
              <option value="Orange">Orange</option>
            </select>
          </Col>
          <Col md>
            <label className="filter-label" htmlFor="itemsStyle">Style: {props.filters.style}</label>
            <select  name="style" id="itemsStyle" onChange={props.filterChange}>
              <option value="">Style</option>
              <option value="Sparkling">Sparkling</option>
              <option value="Still">Still</option>
              <option value="Fortified">Fortified</option>
            </select>
          </Col>
          <Col md>
            <Button onClick={props.filterReset}>Reset<i className="fa fa-times" aria-hidden="true"></i></Button>
          </Col>
        </Row>
      </Container>
    </div>
        
  );
}
  
export default Filters;