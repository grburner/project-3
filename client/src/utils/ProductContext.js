import React from 'react';

const ProductContext = React.createContext({
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
  update: () => {}
});

export default ProductContext;