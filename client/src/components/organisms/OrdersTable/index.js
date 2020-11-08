import React, { useEffect, useState, useContext } from 'react';
import { store } from '../../../utils/GlobalState';
import OrderDetail from '../../organisms/OrderDetail';
import DateFormatter from '../../../utils/DateFormatter';
import Badge from 'react-bootstrap/Badge';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import API from '../../../utils/API';

const OrdersTable = () => {
  const globalState = useContext(store);

  const [chartData, setChartData] = useState([]);
  const [retailerId, setRetailerId] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const [prodDetail, setProdDetail] = useState({});
  const [detailIndex, setDetailIndex] = useState(0);

  useEffect(() => {
    API.findByRetailerId(globalState.state.userId)
      .then(data => {
        setChartData(data.data);});
  }, []);

  const getOrderInfo = (elem) => {
    let total = 0; 
    let items = 0;
    elem.detail.forEach(e => {
      items += e.quantity;
      const itemTotal = e.quantity * e.price;
      total += itemTotal;
    });
    return {'total': total, 'items': items};
  };

  const passProdDetail = (ind = 0) => {
    let index = ind;
    let passObj = {};
    let details = [];

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
    passObj.status = chartData[index].status;
    passObj.orderDate = chartData[index].date;
    passObj.shipByDate = DateFormatter(chartData[index].date, 14);
    passObj.orderId = chartData[index]._id;
    setProdDetail(passObj);
    setDetailIndex(index);
    setShowDetail(true);
  };
  
  const renderProductRow = (element, index) => {
    const orderDate = DateFormatter(element.date);
    const sendDate = DateFormatter(element.date, 14);

    return (
      <tr key={index}>
        <td onClick={e => passProdDetail(e.target.dataset.index)} data-index={index}>
          <svg onClick={e => passProdDetail(e.target.dataset.index)} data-index={index} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt-cutoff" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path onClick={e => passProdDetail(e.target.dataset.index)} data-index={index} fillRule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v13h-1V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51L2 2.118V15H1V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zM0 15.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
            <path onClick={e => passProdDetail(e.target.dataset.index)} data-index={index} fillRule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-8a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </td>
        <td>{'...' + element._id.substring(element._id.length - 10, element._id.length)}</td>
        <td>{orderDate}</td>
        <td>{sendDate}</td>
        <td>{getOrderInfo(element).items}</td>
        <td>${getOrderInfo(element).total}</td>
        <td><Badge pill variant={(element.status == 'open' ? 'danger' : 'success')}>{element.status}</Badge></td>
      </tr>
    );
  };

  return (
    <div className="mt-3">
      <div>
        <Navbar bg="light" expand="lg" className="w-100">
          <Navbar.Brand href="#home"><h5>Your Orders</h5></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Row className="mt-2">
        <Col sm={showDetail ? 8 : 12}>
          <Table>
            <thead>
              <tr>
                <th>Info</th>
                <th>Order ID</th>
                <th>Order Date</th>
                <th>Ship By Date</th>
                <th>Number of Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {chartData.map(renderProductRow)}
            </tbody>
          </Table>
        </Col>
        <Col sm={showDetail ? 4 : 0}>
          {showDetail ? <OrderDetail data={prodDetail}></OrderDetail> : ''}
        </Col>
      </Row>
    </div>
  );
};

export default function OrderTable() {

  return (
    <div className="App table-wrapper-scroll-y my-custom-scrollbar w-100 mb-3">
      <OrdersTable />
    </div>
  );
}
