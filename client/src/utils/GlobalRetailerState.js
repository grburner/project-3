import React, { createContext, useReducer } from 'react';


const initialState = {
  sProdModalinView: false,
  bProdModalinView: false,
  sInvModalinView: false,
  bInvModalinView: false
};

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
    case 'SHOWsProdModalinView':
      return {
        ...initialState,
        sProdModalinView: true
      };
    case 'HIDEsProdModalinView':
      return {
        ...initialState,
        sProdModalinView: false
      };
    case 'SHOWbProdModalinView':
      return {
        ...initialState,
        bProdModalinView: true
      };
    case 'HIDEbProdModalinView':
      return {
        ...initialState,
        bProdModalinView: false
      };
    default:
      throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };