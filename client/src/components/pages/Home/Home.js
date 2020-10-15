import React from 'react';
import './style.css';

import Hero from "../../organisms/Hero/Hero"
import Filters from "../../organisms/Filters/Filters" 
import Marketplace from "../../organisms/Marketplace/Marketplace" 

function Home(){
  return (
    <div>
      <Hero />
      <div  className="container">
        <Filters />
        <Marketplace />
      </div>
    </div>
  );
}
  
export default Home;