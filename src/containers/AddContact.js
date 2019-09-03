import { connect } from 'react-redux';
import AddContactForm from '../components/contacts/AddContactForm';

const mapStateToProps = () => ({
  nameInput: 'hello',
  numberInput: '1234567890'
});

const mapDispatchToProps = () => ({
  nameChange: ()=>{},
  numberChange: ()=>{},
  contactSubmit: ()=>{}
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
