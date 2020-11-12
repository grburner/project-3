import React, { useEffect, useState, useRef, useContext } from 'react';

// UTILS
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';

// COMPONENTS
import Editable from '../../../utils/Editable.js';
import Button from '../../atoms/Button/Button.js';

// BOOTSTRAP
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';

const ProductsTable = () => {
  const globalState = useContext(store);

  const [chartData, setChartData] = useState([]);
  const [inputData, setInputData] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    API.getProductsByRetailerId(globalState.state.userId)
      .then(data => {
        console.log(data.data);
        setChartData(data.data.slice().sort((a,b) => b.price - a.price));
      });
  }, []);

  // Reset state after changes (called from toggleStatus and changeInput)
  const changeState = (field, index, value) => {
    const newData = chartData.map((d, i) => {
      if (i === index) {
        d[field] = value;
      }
      return d;
    });
    setChartData(newData);
  };

  // Update product status
  const toggleStatus = e => {
    const id = e.target.dataset.id;
    chartData.forEach((elem, index) => {
      if (id === elem._id) {
        elem.status === 'live' ? changeState('status', index, 'paused') : changeState('status', index, 'live');
      }
    });
  };

  // Change editable input based on a specific field
  const changeInput = (e, field) => {
    const id = e.target.dataset.id;
    const value = e.target.value.replace(/^0+/, '');
    chartData.forEach((elem, index) => {
      if (id === elem._id) {
        changeState(field, index , value);
      }
    });
  };

  // Update products in database after changes
  const sendData = () => {
    chartData.forEach(elem => {
      const body = 
      {
        'price': elem.price,
        'units': elem.units,
        'status': elem.status
      };
      API.updateProducts(elem._id, body);
    });
  };
  
  // Render rows, called from return
  const renderProductRow = (element, index) => {
    return (
      <tr key={index} data-id={element._id}>
        <td data-id={element._id} >{element.name}</td>
        <td data-id={element._id}>
          <Editable
            text={inputData}
            placeholder={'$' + element.price}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={element.price} 
              data-index={index}
              data-id={element._id}
              type='text'
              placeholder={element.price}
              value={element.price}
              onChange={e => changeInput(e, 'price')}
            />
          </Editable>
        </td>
        <td data-id={element._id}>
          <Editable
            text={inputData}
            placeholder={element.units}
            childRef={inputRef}
            type='input'
          >
            <input 
              ref={inputRef}
              data-value={element.units} 
              data-index={index}
              data-id={element._id}
              type='text'
              placeholder={element.units}
              value={element.units}
              onChange={e => changeInput(e, 'units')}
            />
          </Editable>
        </td>
        <td data-index={index} data-id={element._id}  data-value={element.status} onClick={toggleStatus}>{element.status === 'live' ? 'live' : 'paused'}</td>
      </tr>
    );
  };

  return (
    <div>
      <div className="mb-3">
        <Navbar bg="light" expand="lg" className="w-100">
          <Navbar.Brand href="#home"><h5>Your Products</h5></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Button onClick={sendData}>
              Save
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Current Price</th>
            <th>Current Inventory</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chartData ? chartData.map(renderProductRow) : 'waiting...'}
        </tbody>
      </Table>
    </div>
  );
};

export default function ProductTable() {
  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar w-100">
      <ProductsTable />
    </div>
  );
}
