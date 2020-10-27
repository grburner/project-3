import React, { createContext, useReducer } from 'react';
import API from '../utils/API';


const initialState = {
  sProdModalinView: false,
  bProdModalinView: false,
  sInvModalinView: false,
  bInvModalinView: false,
  currentUser: '',
  userCart: [],
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
    case 'ADDtoCart':
      return {
        ...state,
        userCart: action.payload
      };
    case 'TOGGLEtoast':
      return {
        ...state,
        toastState: !state.toastState
      }
    default:
      throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };