import { connect } from 'react-redux';
import ContactList from '../components/contacts/ContactList';
import { getContactsArr } from '../selectors/contactSelectors';
import { updateList } from '../actions/contactActions';

const mapStateToProps = state => ({
  contactArr: getContactsArr(state)
});

const mapDispatchToProps = dispatch => ({
  updateList(){
    dispatch(updateList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);

// contactArr
