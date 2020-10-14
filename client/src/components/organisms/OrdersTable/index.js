import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import * as API from '../../../utils/mockAPI';

const OrdersTable = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    API.orderDataAPI.then((data) => {
      setChartData(data);
    }, []);
  });
  
  
  const renderProductRow = (element, index) => {
    return (
      <tr key={index}>
        <td onClick={() => console.log('item detail clicked')}>@</td>
        <td>{element.order_number}</td>
        <td>{element.order_amount}</td>
        <td>{element.order_items}</td>
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
          <th>Order Number</th>
          <th>Order Amount</th>
          <th>Order Items</th>
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
