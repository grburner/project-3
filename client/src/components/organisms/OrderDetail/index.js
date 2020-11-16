import React, { useEffect, useState } from 'react';

// UTILS
import API from '../../../utils/API';
import DateFormatter from '../../../utils/DateFormatter';

// COMPONENTS
import Button from '../../atoms/Button/Button';

// BOOTSTRAP
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

const OrderDetail = (props) => {
  const { data } = props;

  const [custName, setCustName] = useState('');
  const [prodNames, setProdNames] = useState([]);
  const [orderState, setOrderState] = useState(data.status);

  const getUserName = (id) => {
    API.getUserName(id).then((data) => {setCustName(data.data.name);});
  };

  // API call for each product and wait until all are completed to setState
  useEffect(() => {
    let promises = [];
    getUserName(data.custId);
    data.products.forEach((elem) => {
      promises.push(
        API.getProductsID(elem.name)
          .then(data => {return data.data.name;})
      );
    });
    Promise.all(promises).then((values) => {setProdNames(values);});
  }, [data]);

  const renderProductRow = (element, index) => {
    return (
      <tr key={index}>
        <td>{prodNames[index] ? prodNames[index] : 'no data'}</td>
        <td>{element.quantity}</td>
        <td>${(element.cost).toFixed(2)}</td>
      </tr>
    );
  };

  const shipOrder = (id, body) => {
    API.updateOrder(id, body);
    setOrderState('closed');
  };

  return (
    <Card>
      <Card.Header>
        <Row  className="align-items-center">
          <Col>{custName ? custName : ''}</Col>
          <Col>{DateFormatter(data.orderDate)}</Col>
          <Col><Badge pill variant={(data.status == 'open' ? 'danger' : 'success')}>{data.status}</Badge></Col>
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
            { data.shippedOn ? 
              <div>
                <Row className="d-flex justify-content-center">Shiped On:</Row>
                <Row className="d-flex justify-content-center">{DateFormatter(data.shippedOn)}</Row>
              </div> :
              <div>
                <Row className="d-flex justify-content-center">Ship By:</Row>
                <Row className="d-flex justify-content-center">{data.shipByDate}</Row>
              </div>
            }
          </Col>
          <Col className="mt-2">
            { data.shippedOn ? '' : 
              <Button onClick={() => shipOrder(data.orderId, {'status': 'closed', 'shipped_on': new Date()})}>Ship Now</Button>
            }
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default OrderDetail;
