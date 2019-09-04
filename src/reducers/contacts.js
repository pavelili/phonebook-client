import { UPDATE_NAMEINPUT, UPDATE_NUMBERINPUT, UPDATE_LIST } from '../actions/contactActions';

const initialState = {
  contacts: [],
  searchInput: '',
  nameInput: '',
  numberInput: ''
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_LIST:
      return{ ...state, contacts: action.payload };
    case UPDATE_NAMEINPUT: 
      return{ ...state, nameInput: action.payload };
    case UPDATE_NUMBERINPUT: 
      return{ ...state, numberInput: action.payload };
    default: return state;
  }
}
