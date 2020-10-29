/* eslint-disable react/prop-types */
import React, {useState, useContext, useEffect} from 'react';
import ProductContext from '../../../utils/ProductContext';
import API from '../../../utils/API';

function Stores(props){

  const products = useContext(ProductContext);
  const [retailers, setRetailers] = useState(['Test']);

  // Set retailers array
  let retailerArray = [];
  for(let i = 0; i < props.products.length; i++){
    API.findRetailerById(props.products[i].retailer_id)
      .then(res => {
        retailerArray.push(res.data.company_name);
        // setRetailers(retailerArray)
      })
      .catch(err => console.log(err));
  }
  // Promise.all(retailerArray).then((values) => {setRetailers(values)})
  // console.log("SETTING RETAILER ARRAY")
  // console.log(retailerArray)
  setRetailers(retailerArray);

  return (
    <select name="store"  id="itemsStore" onChange={props.filterChange}>
      {retailers.map((x, i)=>{
        return <option value={x}>{retailers[i]}</option>;
      })}
    </select> 
  );
    

}
  
export default Stores;