import React, {useState, useEffect} from 'react';
import './style.css';

import Hero from '../../organisms/Hero/Hero';
import Filters from '../../organisms/Filters/Filters'; 
import Marketplace from '../../organisms/Marketplace/Marketplace'; 
import Search from '../../molecules/Search/Search';
import Button from '../../atoms/Button/Button';

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

  // Needed for search
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

  // Load product data
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
  
  // Filter functions
  const [filters, setFilters] = useState({
    priceMax: 0,
    store: '',
    type: '',
    style: ''
  });

  const filterChange = (event) => {
    const {name, value} = event.target;
    setFilters({
      ...filters,
      [name]: value
    });
    console.log(filters);
  };

  const resetFilters = () => {
    setFilters({
      priceMax: 0,
      store: '',
      type: '',
      style: ''
    });
  };

  return (
    <ProductContext.Provider value={productState}>
      <Hero>
        <Search />
      </Hero>
      <Filters filters={filters} filterChange={filterChange} filterReset={resetFilters}/>
      <div className="marketplace-container" id="marketplace-container">
        <Marketplace filters={filters} />
      </div>
    </ProductContext.Provider>
  );
}
  
export default Home;