import { UPDATE_NAMEINPUT, UPDATE_NUMBERINPUT } from '../actions/contactActions';

const initialState = {
  contacts: [],
  searchInput: '',
  nameInput: '',
  numberInput: ''
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case UPDATE_NAMEINPUT: 
      return{ ...state, nameInput: action.payload };
    case UPDATE_NUMBERINPUT: 
      return{ ...state, numberInput: action.payload };
    default: return state;
  }
}
