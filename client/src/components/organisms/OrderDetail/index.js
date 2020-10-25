import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DateFormatter from '../../../utils/DateFormatter';

const OrderDetail = (props) => {
  const { data } = props;
  const [custName, setCustName] = useState('');
  const [prodNames, setProdNames] = useState([]);

  useEffect(() => {
    API.getUserName(data.custId)
      .then(data => setCustName(data.data.name));
  }, [custName, prodNames]);
  // this is a hackjob and needs fixed

  useEffect(() => {
    let prodsArray = [];
    data.products.forEach((elem) => {
      API.getProductsID(elem.name)
        .then(data => prodsArray.push(data.data.name));
    });
    setProdNames(prodsArray);
  }, []);

  const renderProductRow = (element, index) => {
    return (
      <tr key={index}>
        <td>{prodNames[index] ? prodNames[index] : 'no data'}</td>
        <td>{element.quantity}</td>
        <td>{element.cost}</td>
      </tr>
    );
  };
  return (
    <tr>
      <Row>
        <Col>{custName ? custName : ''}</Col>
        <Col>{DateFormatter(data.orderDate)}</Col>
        <Col>{data.stats}</Col>
      </Row>
      <Table>
        <tbody>
          {data.products.map(renderProductRow)}
        </tbody>
      </Table>
    </tr>

  );
};

export default OrderDetail;