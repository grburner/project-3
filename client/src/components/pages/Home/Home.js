import React, {useState, useEffect} from 'react';
import './style.css';

import Hero from '../../organisms/Hero/Hero';
import Filters from '../../organisms/Filters/Filters'; 
import Marketplace from '../../organisms/Marketplace/Marketplace'; 

// Context
import ProductContext from '../../../utils/ProductContext'

import API from '../../../utils/API'

function Home(){
  
  const [productState, setProductState] = useState({
    id: "",
    country: "",
    description: "",
    geo2: "",
    grape_blend: "",
    name: "",
    price: 0,
    size: "",
    type1: "",
    type2: "",
    units: 0
  })

  const getProductData = () => {
    API.getProducts()
      .then(res => {
        setProductState(res.data);
        for(let i = 0; i < res.data.length; i++){
          console.log(res.data[i].name)
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <ProductContext.Provider value={productState}>
      <Hero />
      <div  className="container">
        <Filters />
        <Marketplace />
      </div>
    </ProductContext.Provider>
  );
}
  
export default Home;