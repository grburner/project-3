import React, { useState, useContext, useEffect } from 'react';
import API from '../../../utils/API';
import { store } from '../../../utils/GlobalState';
import CartDetail from '../../molecules/CartDetail.js';
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
                API.getProductsID(elem)
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

    return(
        <Modal 
            show={globalState.state.toastState} 
            onHide={() => {dispatch({type: "TOGGLEtoast"})}}
            size="lg"
        >
            <Modal.Header  closeButton>
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">Cart</strong>
            </Modal.Header>
            <Modal.Body>
                    {cartData ? cartData.map((elem, index) => (
                        <CartDetail key={index} data={elem}></CartDetail>
                    )): ''}
            </Modal.Body>
            <Button>Checkout</Button>
        </Modal>
    )
}

export default CartToast;