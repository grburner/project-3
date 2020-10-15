import React, {useState} from 'react';
import './style.css';

import Button from '../../atoms/Button/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search(){
  
  const [searchValue, searchUpdate] = useState({
      search: ""
  })

  const updateSearch = (event) => {
      searchUpdate({
          search: event.target.value
      })
  }

  const searchClick = () => {
    console.log(searchValue.search)
  }

  return (
    <div className="search-wrapper">
        <input onChange={updateSearch}></input><i onClick={searchClick} className="search-icon fa fa-search" aria-hidden="true"></i>
    </div>
  );
}

export default Search;