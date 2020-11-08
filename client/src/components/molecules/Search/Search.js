import React, {useState, useContext} from 'react';
import './style.css';

// import Button from '../../atoms/Button/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

import API from '../../../utils/API';

import ProductContext from '../../../utils/ProductContext';

function Search(){
  
  const products = useContext(ProductContext);

  const [searchValue, searchUpdate] = useState({
    search: 'Find your perfect wine'
  });

  const updateSearch = (event) => {
    searchUpdate({
      search: event.target.value
    });
    searchClick();
  };

  const clearSearch = () => {
    searchUpdate({
      search: ''
    });
  };

  function update(obj) {
    let data = updateHelper(obj);
    products.update(
      data
    );
    function updateHelper(obj){
      let data2 = obj;
      data2.update = update;
      return data2;
    }
  }

  const searchClick = () => {
    if(searchValue.search.length <= 0){
      API.getProducts()
        .then(res => {
          let data = res.data;
          data.update = update;
          products.update(
            data
          );
        })
        .catch(err => console.log(err));
    } else {
      API.getProductsByName(searchValue.search.toUpperCase())
        .then(res => {
          products.update(res.data);
        })
        .catch(err => console.log(err));
    }
    
  };

  return (
    <div className="search-wrapper">
      <input onChange={updateSearch} onFocus={clearSearch} value={searchValue.search}></input><i onClick={searchClick} className="search-icon fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export default Search;