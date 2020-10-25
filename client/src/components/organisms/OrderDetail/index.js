import React, { useEffect, useState } from 'react';

import Table from 'react-bootstrap/Table';
import API from '../../../utils/API';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DateFormatter from '../../../utils/DateFormatter';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from '../../atoms/Button/Button';

const OrderDetail = (props) => {
  const { data } = props;
  const [custName, setCustName] = useState('');
  const [prodNames, setProdNames] = useState([]);
  console.log(data)
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
    <Card>
      <Card.Header>
        <Row  className="align-items-center">
          <Col>{custName ? custName : ''}</Col>
          <Col>{DateFormatter(data.orderDate)}</Col>
          <Col><Badge pill variant={(data.status == "open" ? "danger" : "success")}>{data.status}</Badge></Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Table>
          <tbody>
            {data.products.map(renderProductRow)}
          </tbody>
        </Table>
        <Row className="border-top border-dark">
          <Col className="mt-2">
            <Row className="d-flex justify-content-center">Ship By:</Row>
            <Row className="d-flex justify-content-center">{data.shipByDate}</Row>
          </Col>
          <Col className="mt-2">
            <Button onClick={() => console.log('ship me clicked')}>Ship Now</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrderDetail;