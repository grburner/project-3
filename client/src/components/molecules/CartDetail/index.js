import React, { useState, useEffect, useRef } from 'react';

// UTILS
import Editable from '../../../utils/Editable';

// BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CartDetail = (props) => {
  const [placeholder, setPlaceholder] = useState(props.data.order_units);
  const inputRef = useRef();

  useEffect(() => {}, [placeholder]);

  // Change cart data based on type
  const handleChange = (e, type) => {
    if ( type === 'remove' ) {
      props.onChange(e, props.data.name, 'remove');
    } else if (e.target.value < props.data.units) {
      props.onChange(e, props.data.name, type);
    } else {
      setPlaceholder(`sorry - max ${props.data.units} bottles!`);
    }
  };

  return(
    <Row>
      <Col xs={1}>
        <div onClick={(e) => handleChange(e, 'remove')}>
          <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </Col>
      <Col xs={6}>{props.data.name}</Col>
      <Col xs={1}>${props.data.price}</Col>
      <Col xs={1}>
        <Editable
          text={props.data.order_units}
          placeholder={`max ${props.data.units} units`}
          childRef={inputRef}
          type='input'
        >
          <input 
            className='d-inline' 
            ref={inputRef}
            placeholder={`max ${props.data.units} units`}
            data-id={props.key} 
            value={props.data.value} 
            onChange={(e) => handleChange(e, 'change')}>
          </input>
        </Editable>
      </Col>
    </Row>
  );
};

export default CartDetail;