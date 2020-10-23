import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';

const ProductsTable = () => {
  const [chartData, setChartData] = useState([]);
  const [retailerId, setRetailerId] = useState("5f90df97d56aef06bcb010d3")


  useEffect(() => {
    console.log(retailerId)
    API.getProductsByRetailerId(retailerId).then((data) => {
      console.log(data)
      // setChartData(data);
    }, []);
  });
  
  
  const renderProductRow = (element, index) => {
    return (
      <tr key={index}>
        <td onClick={() => console.log('product changes saved')}>@</td>
        <td>{element.product_name}</td>
        <td>{element.price}</td>
        <td>{element.cur_inventory}</td>
        <td>{element.status}</td>
      </tr>
    );
  };

  return (

    <Table striped bordered hover size="sm">
      <caption>Products</caption>
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
        {chartData.map(renderProductRow)}
      </tbody>
    </Table>
  );
};

export default function ProductTable() {

  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar">
      <ProductsTable />
    </div>
  );
}
