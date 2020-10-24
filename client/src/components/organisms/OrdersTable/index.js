import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';

const OrdersTable = () => {
  const [chartData, setChartData] = useState([]);
  const [retailerId, setRetailerId] = useState("5f90df97d56aef06bcb010d3")

  useEffect(() => {
    API.findByRetailerId(retailerId).then(data => {
      setChartData(data.data);
    });
  }, []);

  const getTotal = (elem) => {
    let total = 0 
    elem.detail.forEach(e => {
      // console.log(e.quantity, e.price)
        const itemTotal = e.quantity * e.price
        total += itemTotal
    })
    console.log(total)
    return total
  }
  
  
  const renderProductRow = (element, index) => {
    return (
      <tr key={index}>
        <td onClick={() => console.log('item detail clicked')}>@</td>
        <td>{element._id}</td>
        <td>{element.user_id}</td>
        <td>{element.date}</td>
        <td>{getTotal(element)}</td>
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
          <th>Order ID</th>
          <th>User Id</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {chartData.map(renderProductRow)}
      </tbody>
    </Table>
  );
};

export default function OrderTable() {

  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar">
      <OrdersTable />
    </div>
  );
}
