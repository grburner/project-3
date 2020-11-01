import React, { useState, useContext, useEffect } from 'react';
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';
import Modal from 'react-bootstrap/Modal'
import Button from '../../atoms/Button/Button';

const CartToast = () => {
    const globalState = useContext(store);
    const { dispatch } = globalState;

    const [cartData, setCartData] = useState()

    useEffect(() => {
        let promises = [];

        globalState.state.userCart.forEach(elem => {
            promises.push(
                API.getProductsID(elem.product_id)
                .then(data => { return {
                    "name": data.data.name,
                    "price": data.data.price,
                    "retailer_id": data.data.retailer_id,
                    "units": data.data.units,
                    "order_units": 1,
            }})
            )
        });
        Promise.all(promises).then((values) => {setCartData(values)})
    }, [globalState]);

    const handleChange = (e, name) => {
        const value = e.target.value;
        cartData.forEach((elem, index) => {
            if (name === elem.name) {
            changeState('order_units', name , value);
            }
        });
    };

    const changeState = (field, name, value) => {
        const newData = cartData.map((d, i) => {
          if (name === d.name) {
            d[field] = value;
          }
          return d;
        });
        setCartData(newData);
      };

    const createOrder = () => {
        let orders = ["5f90df97d56aef06bcb010d3"]
        cartData.forEach(elem => {
            let id = elem.retailer_id
            orders.forEach(order => {
                if (order === id) {
                    console.log('matches ' + id)
                } else {
                    orders.push(id)
                    return
                }
            })
            return
        })
        console.log(orders)
    }

    return(
        <Modal 
            show={globalState.state.toastState}
            onHide={() => {dispatch({type: "TOGGLEtoastHIDE"})}}
            size="lg"
        >
            <Modal.Header  closeButton>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Cart</strong>
            </Modal.Header>
            <Modal.Body>
                    {cartData ? cartData.map((elem, index) => (
                        <div>{elem.name}</div>
                    )): ''}
            </Modal.Body>
            {/* <Button onClick={() => createOrder()}>Checkout</Button> */}
        </Modal>
    )
}

export default CartToast;