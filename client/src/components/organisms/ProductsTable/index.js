import React, { useEffect, useState, useRef } from 'react';
import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';
import Editable from '../../../utils/Editable.js';
import Button from '../../atoms/Button/Button.js';

const ProductsTable = () => {
  const [chartData, setChartData] = useState([]);
  const [retailerId, setRetailerId] = useState("5f90df97d56aef06bcb010d3")
  const [inputData, setInputData] = useState('')
  const inputRef = useRef();


  useEffect(() => {
    API.getProductsByRetailerId(retailerId).then(data => {
      setChartData(data.data);
    })
  }, []);

  const changeState = (field, index, value) => {
    const newData = chartData.map((d, i) => {
      if (i === index) {
        d[field] = value;
      }
      return d;
    });
    setChartData(newData);
  }

  const toggleStatus = e => {
    const id = e.target.dataset.id
    chartData.forEach((elem, index) => {
      if (id === elem._id) {
        elem.status ? changeState("status", index, false) : changeState("status", index, true)
      }
    })
  }

  const changeInput = (e, field) => {
    const id = e.target.dataset.id
    const value = e.target.value
    chartData.forEach((elem, index) => {
      if (id === elem._id) {
        changeState(field, index , value)
      }
    })
  }

  const sendData = () => {
    chartData.forEach(elem => {
      const body = 
      {
        "price": parseInt(elem.price),
        "units": parseInt(elem.units),
        "status": elem.status
      }
      API.updateProducts(elem._id, body)
    })
  }
  
  const renderProductRow = (element, index) => {
    return (
      <tr key={index} data-id={element._id}>
        <td  data-id={element._id} onClick={() => console.log('product changes saved')}>@</td>
        <td data-id={element._id} >{element.name}</td>
        <td data-id={element._id}>
          <Editable
              text={inputData}
              placeholder={element.price}
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
        <td data-index={index} data-id={element._id}  data-value={element.status} onClick={toggleStatus}>{element.status ? "Live" : "Paused"}</td>
      </tr>
    );
  };

  return (

    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>@</th>
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
      <Button onClick={sendData}>
        Save
      </Button>
    </div>
  );
};

export default function ProductTable() {

  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar">
      <ProductsTable />
    </div>
  );
}
