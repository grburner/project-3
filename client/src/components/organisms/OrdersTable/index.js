import React, { useEffect, useState } from 'react';
import { store } from '../../../utils/GlobalRetailerState';
import OrderDetail from '../../organisms/OrderDetail';

import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';

const OrdersTable = () => {
  const [chartData, setChartData] = useState([]);
  const [retailerId, setRetailerId] = useState('5f90df97d56aef06bcb010d4');
  const [showDetail, setShowDetail] = useState(false);
  const [prodDetail, setProdDetail] = useState({});

  useEffect(() => {
    API.findByRetailerId(retailerId).then(data => {
      setChartData(data.data);
    });
  }, []);

  const getTotal = (elem) => {
    let total = 0; 
    elem.detail.forEach(e => {
      const itemTotal = e.quantity * e.price;
      total += itemTotal;
    });
    return total;
  };

  const passProdDetail = (e) => {
    let index = e.target.dataset.index;
    let passObj = {};
    let details = [];

    // let custName
    // API.getUserName(chartData[index].user_id).then(value => { custName = value.data.name })

    chartData[index].detail.map(elem => {
      details.push(
        {
          name: elem.product_id, 
          quantity: elem.quantity, 
          cost: elem.price * elem.quantity
        });
    });
    passObj.products = details;
    passObj.custId = chartData[index].user_id;
    passObj.stats = chartData[index].status;
    passObj.orderDate = chartData[index].date;
    setProdDetail(passObj);
    setShowDetail(true);
  };
  
  const renderProductRow = (element, index) => {
    let date = new Date(element.date)
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();

    return (
      <tr key={index}>
        <td onClick={e => passProdDetail(e)} data-index={index}>@</td>
        <td>{element._id}</td>
        <td>{element.user_id}</td>
        <td>{year+'-' + month + '-'+ dt}</td>
        <td>{year+'-' + month + '-' + (dt + 7)}</td>
        <td>{getTotal(element)}</td>
        <td>{element.status}</td>
      </tr>
    );
  };

  return (
    <div>
      <Table striped bordered hover size="sm">
        <caption>Products</caption>
        <thead>
          <tr>
            <th>@</th>
            <th>Order ID</th>
            <th>User Id</th>
            <th>Order Date</th>
            <th>Ship By Date</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {chartData.map(renderProductRow)}
        </tbody>
      </Table>
      {showDetail ? <OrderDetail data={prodDetail}></OrderDetail> : ''}
    </div>
  );
};

export default function OrderTable() {

  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar">
      <OrdersTable />
    </div>
  );
}
