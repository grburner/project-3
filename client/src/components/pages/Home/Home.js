import React, {useState, useEffect} from 'react';
import './style.css';

import Hero from '../../organisms/Hero/Hero';
import Filters from '../../organisms/Filters/Filters'; 
import Marketplace from '../../organisms/Marketplace/Marketplace'; 

// Context
import ProductContext from '../../../utils/ProductContext';

import API from '../../../utils/API';

function Home(){
  
  const [productState, setProductState] = useState({
    id: '',
    country: '',
    description: '',
    geo2: '',
    grape_blend: '',
    name: '',
    price: 0,
    size: '',
    type1: '',
    type2: '',
    units: 0,
    update: (obj) => {
      setProductState(
        obj
      );
    }
  });

  function update(obj) {
    let data = updateHelper(obj);
    setProductState(
      data
    );
    function updateHelper(obj){
      let data2 = obj;
      data2.update = update;
      return data2;
    }
  }

  const getProductData = () => {
    API.getProducts()
      .then(res => {
        let data = res.data;
        data.update = update;
        setProductState(
          data
        );
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