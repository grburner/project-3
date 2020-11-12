import React, { createContext, useReducer } from 'react';

const initialState = {
  sProdModalinView: false,
  bProdModalinView: false,
  sInvModalinView: false,
  bInvModalinView: false,
  currentUser: '',
  userCart: [],
  userRole: '',
  userId: '',
  toastState: false
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
    case 'SETcurrentUser':
      return {
        ...initialState,
        currentUser: action.payload
      };
    case 'SETuserCart':
      return {
        ...state,
        userCart: action.payload
      };
    case 'SETuser':
      return {
        ...state,
        userRole: action.payload.userRole,
        userId: action.payload.userId
      };
    case 'TOGGLEtoastSHOW':
      return {
        ...state,
        toastState: true
      };
    case 'TOGGLEtoastHIDE':
      return {
        ...state,
        toastState: false
      };
    default:
      throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };