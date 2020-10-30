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

  const [retailers, setRetailers] = useState(['Test']);

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
    document.getElementById('priceRange').value=maxPrice.maxPrice;
  },[maxPrice]);

  // Sticky Header
  var header = '';
  var sticky = '';
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {
    // Get the header
    header = document.getElementById('filters');

    // Get the offset position of the navbar
    sticky = document.getElementById('filters').offsetTop;
    stickyFilter();
  };

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function stickyFilter() {
    if (window.pageYOffset > sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  return (
    
    <div className="filter-wrapper" id="filters">
      <Container>
        <p className="filter-header">Filter Your Search:</p>
        <Row>
          <Col md>
            <label htmlFor="priceRange">Max Price: {props.filters.priceMax === 0 ? '$' + maxPrice.maxPrice : '$' + props.filters.priceMax}</label>
            <input name="priceMax" type="range" className="custom-range" id="priceRange" min="0" max={maxPrice.maxPrice} onChange={props.filterChange}/>
          </Col>
          <Col md>
            <label htmlFor="itemsStore">Store:</label><br/>
            <select name="store"  id="itemsStore" onChange={props.filterChange}>
              <option value="">   </option>
              {retailers.map((x, i)=>{
                return <option value={x.split('*')[1]}>{x.split('*')[0]}</option>;
              })}
            </select>
          </Col>
          <Col md>
            <label htmlFor="itemsType">Type: {props.filters.type}</label><br/>
            <select name="type"  id="itemsType" onChange={props.filterChange}>
              <option value="">   </option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Rose">Rose</option>
              <option value="Orange">Orange</option>
            </select>
          </Col>
          <Col md>
            <label htmlFor="itemsStyle">Style: {props.filters.style}</label><br/>
            <select  name="style" id="itemsStyle" onChange={props.filterChange}>
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