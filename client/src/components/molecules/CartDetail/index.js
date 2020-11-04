import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CartDetail = (props) => {
    const [orderQuant, setOrderQuant] = useState(props.data)

    const changeQuant = (delta) => {
        setOrderQuant({
            ...orderQuant,
            ...{ order_units: orderQuant.order_units += delta }
        })
        console.log(orderQuant)
    }

    const handleChange = (e, name) => {
        props.onChange(e, props.data.name)
    }

    return(
        <Row>
            <Col>{props.data.name}</Col>
            <Col>{props.data.price}</Col>
            <Col>
                <input data-id={props.key} value={props.value} onChange={(e) => handleChange(e)}></input>
            </Col>
        </Row>
    )
}

export default CartDetail;