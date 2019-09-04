import { connect } from 'react-redux';
import AddContactForm from '../components/contacts/AddContactForm';
import { getNameInput, getNumberInput } from '../selectors/contactSelectors';
import { updateName, updateNumber, addContact } from '../actions/contactActions';

const mapStateToProps = state => ({
  nameInput: getNameInput(state),
  numberInput: getNumberInput(state)
});

const mapDispatchToProps = dispatch => ({
  nameChange({ target }){
    dispatch(updateName(target.value));
  },
  numberChange({ target }){
    dispatch(updateNumber(target.value));
  },
  contactSubmit(event, nameInput, numberInput){
    event.preventDefault();
    dispatch(addContact(nameInput, numberInput));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddContactForm);

// contactSubmit,
// nameInput,
// nameChange,
// numberInput,
// numberChange

// event, nameInput, numberInput
