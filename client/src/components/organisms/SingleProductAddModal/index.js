import React, { useContext, useEffect, useState } from 'react';
import { store } from '../../../utils/GlobalRetailerState';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import API from '../../../utils/API';

import ImageUpload from '../../organisms/ImageUpload/index'

import './style.css';

const SingleProductAddModal = () => {
  const globalState = useContext(store);
  const [user, setUser] = useState('5f90df97d56aef06bcb010d3');
  const { dispatch } = globalState;

  const [product, setProduct] = useState({
    text: '',
    description: '',
    country: 'United States',
    region: 'Napa Valley',
    type1: 'Red',
    type2: 'Still',
    size: '750mL',
    grapes: 'Syrah',
    tags: ["Natural"],
    image: ''
  });

  const testUser = {
    'name': 'gary test',
    'email': 'gary@test.com',
    'role': 'consumer',
    'password': 'testpass'
  };

  const updateProduct = e => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      ...{[name]: value}
    });
  };

  function addProduct(product){
    const productToAdd = {
      'retailer_id': user,
      'name': product.text.toUpperCase(),
      'description': product.description,
      'country': product.country,
      'geo2': product.region,
      'type1': product.type1,
      'type2': product.type2,
      'size': product.size,
      'grape_blend': product.grapes,
      'units': 0,
      'price': 0,
      'image': product.image
    };

    API.createProduct(productToAdd)
      .then(res => {
        //console.log(res);
      })
      .catch(err => console.log(err));
  }

  const imageUpload = (resultEvent) => {
    if (resultEvent.event === 'success') {
      console.log(resultEvent.info.secure_url)
      setProduct({
        ...product,
        image: resultEvent.info.secure_url
      });
    }
  }

  return (
      <>
      <Modal show={globalState.state.sProdModalinView}>
        <Modal.Header>
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
          <Form.Label>Country</Form.Label>
          <Form.Control 
            as="select"
            onChange={updateProduct}
            value={product.description}
            defaultValue="United States"
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
            defaultValue="Red"
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
            defaultValue="Still"
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
            defaultValue={"mail@example.com"}
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
        <div style={{padding:"10px 0"}}>
        <ImageUpload imageUpload={imageUpload}/>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'HIDEsProdModalinView'})}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={() => {
            addProduct(product);
            dispatch({ type: 'HIDEsProdModalinView'})
          }
          }>
            Submit
          </Button>
        </Modal.Footer>
        
      </Modal>
     
    </>
  );
};

export default SingleProductAddModal;