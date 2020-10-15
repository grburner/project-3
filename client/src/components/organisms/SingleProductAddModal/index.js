import React, { useContext } from 'react';
import { store } from '../../../utils/GlobalRetailerState';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const SingleProductAddModal = () => {
  const globalState = useContext(store);
  const { dispatch } = globalState;

  console.log(globalState.state.sProdModalinView);

  return (
      <>
      <Modal show={globalState.state.sProdModalinView}>
        <Modal.Header closeButton>
          <Modal.Title>Single Product Add Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch({ type: 'HIDEsProdModalinView'})}>
            Close
          </Button>
          <Button variant="primary" onClick={() => dispatch({ type: 'HIDEsProdModalinView'})}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SingleProductAddModal;