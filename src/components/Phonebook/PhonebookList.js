import { connect } from "react-redux";
import * as actions from "../../redux/phonebookActions";
import filterContacts from "../../helpers/filterContacts";

const PhonebookList = ({ filter, contacts, onDeleteContact }) => {
  const filteredContacts = filterContacts(contacts, filter);
  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(actions.handleDeleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList);
