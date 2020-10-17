import React, { useContext, useEffect, useState } from 'react';
import { store } from '../../../utils/GlobalRetailerState';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import API from '../../../utils/API'

const SingleProductAddModal = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  const [product, setProduct] = useState({
    text: '',
    description: '',
    country: '',
    region: '',
    type1: '',
    type2: '',
    size: '',
    grapes: '',
    tags: []
  });

  const updateProduct = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      ...{[name]: value}
    });
  };

  useEffect(() => {
    console.log(product);
  }); 

  function addProduct(obj){
    API.createProduct(obj)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  return (
      <>
      <Modal show={globalState.state.sProdModalinView}>
        <Modal.Header closeButton>
          <Modal.Title>Single Product Add Template</Modal.Title>
        </Modal.Header>
        <Form>
          <Form.Group controlId="formBasicText">
            <Form.Label>Product Name</Form.Label>
            <Form.Control 
              onChange={updateProduct}
              value={product.text}
              type="text" 
              placeholder="Enter text"
              name="text"
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Form.Label>Product Description</Form.Label>
            <Form.Control 
              onChange={updateProduct}
              value={product.description}
              type="text" 
              placeholder="Enter product description"
              name="description"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Form.Label>Country</Form.Label>
          <Form.Control 
            as="select"
            onChange={updateProduct}
            value={product.description}
            name="country">
            <option>United States</option>
            <option>France</option>
            <option>Italy</option>
            <option>Spain</option>
            <option>Australia</option>
            <option>New Zealand</option>
            <option>Argentina</option>
            <option>Chile</option>
            <option>South Africa</option>
            <option>Austria</option>
          </Form.Control>
          <Form.Group controlId="formBasicText">
            <Form.Label>Product Region</Form.Label>
            <Form.Control 
              onChange={updateProduct}
              value={product.region}
              type="text" 
              placeholder="Enter product region"
              name="region"
            />
          </Form.Group>
          <Form.Label>Type</Form.Label>
          <Form.Control 
            as="select"
            onChange={updateProduct}
            value={product.type1}
            name="type1">
            <option>Red</option>
            <option>White</option>
            <option>Rose</option>
            <option>Orange</option>
          </Form.Control>
          <Form.Label>Style</Form.Label>
          <Form.Control 
            as="select"
            onChange={updateProduct}
            value={product.type2}
            name="type2">
            <option>Still</option>
            <option>Sparkling</option>
            <option>Fortified & Dessert</option>
          </Form.Control>
          <Form.Label>Size</Form.Label>
          <Form.Control 
            as="select"
            onChange={updateProduct}
            value={product.size}
            name="size">
            <option>750mL</option>
            <option>1500mL</option>
            <option>375mL</option>
          </Form.Control>
          <Form.Group controlId="formBasicText">
            <Form.Label>Grapes</Form.Label>
            <Form.Control 
              onChange={updateProduct}
              value={product.grapes}
              type="text" 
              placeholder="Enter product description"
              name="grapes"
            />
          </Form.Group>
          <Form.Label>Tags</Form.Label>
          <Form.Control 
            as="select"
            onChange={updateProduct}
            value={product.tags}
            name="tags">
            <option>Natural</option>
            <option>Biodynamic</option>
            <option>Unfiltered</option>
            <option>Organic</option>
            <option>Funky</option>
            <option>Classic</option>
            <option>Bold</option>
          </Form.Control>
        </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'HIDEsProdModalinView'})}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => addProduct(product)
          // dispatch({ type: 'HIDEsProdModalinView'})
          }>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleProductAddModal;