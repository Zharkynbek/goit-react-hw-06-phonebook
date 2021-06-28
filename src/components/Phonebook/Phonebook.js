import React, {Component} from "react"
import shortid from "shortid";
import PhonebookForm from "./PhonebookForm";
import PhonebookList from "./PhonebookList"
import filterContacts from "../../helpers/filterContacts"
import PhonebookFilter from "./PhonebookFilter"


class Phonebook extends Component {
  state = {
    name: "",
    number: "",
    filter: "",
    contacts: [],
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }


  handleAddContact = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.setState((prev) => ({
      contacts: [...prev.contacts, { name, number, id: shortid.generate() }],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  deleteContacts = (contactIt) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactIt
      ),
    }));
  };

  handleChangeName = (name) => {
    this.setState({ name });
  };

  handleChangeNumber = (number) => {
    this.setState({ number });
  };

  handleChangeFilter = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const filteredContacts = filterContacts(
      this.state.contacts,
      this.state.filter
    );
    return (
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm
          onAddContact={this.handleAddContact}
          onChangeNumber={this.handleChangeNumber}
          onChangeName={this.handleChangeName}
          name={this.state.name}
          number={this.state.number}
        />
        <PhonebookFilter
          filterName={this.state.filter}
          onChangeFilter={this.handleChangeFilter}
        />
        <PhonebookList
          onDeleteContacts={this.deleteContacts}
          contacts={filteredContacts}
        />
      </div>
    );
  }
}

export default Phonebook