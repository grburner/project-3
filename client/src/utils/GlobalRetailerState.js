import React, { createContext, useReducer } from 'react';

const initalState = {
  sProdModalinView: false,
  bProdModalinView: false,
  sInvModalinView: false,
  bInvModalinView: false
};
const store = createContext(initalState);
const { Provider } = store;

const StateProvider = ( { children} ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch(action.type) {
    case 'SHOWsProdModalinView':
      return {
        ...initalState,
        sProdModalinView: true
      };
    case 'HIDEsProdModalinView':
      return {
        ...initalState,
        sProdModalinView: false
      };
    case 'SHOWbProdModalinView':
      return {
        ...initalState,
        bProdModalinView: true
      };
    case 'HIDEbProdModalinView':
      return {
        ...initalState,
        bProdModalinView: false
      };
    default:
      throw new Error();
    }
  }, initalState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };