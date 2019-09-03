import { connect } from 'react-redux';
import ContactList from '../components/contacts/ContactList';

const mapStateToProps = () => ({
  contactArr: [{
    name: 'Georgey', phoneNumber: '1234567890'
  }, {
    name: 'Alfred', phoneNumber: '0987654321'
  }]
});

export default connect(
  mapStateToProps
)(ContactList);

// contactArr
