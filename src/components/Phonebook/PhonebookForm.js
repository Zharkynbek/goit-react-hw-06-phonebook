import React, { useState } from "react";
// import { connect } from "react-redux";
// import * as actions from "../../redux/phonebookActions";
import shortId from "shortid";

export default function PhonebookForm({ onAddContact, contacts }) {
  // state = {
  //   name: "",
  //   number: "",
  // };

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSetContact = (e) => {
    setName(e.target.value);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (contacts.some(({ name }) => name === name)) {
      alert(`${name} is already in contact`);
      return;
    }
    onAddContact({
      name: name,
      number: number,
      id: shortId.generate(),
    });
    // setState({
    //   name: "",
    //   number: "",
    // });
  };

  return (
    <div>
      <form action="submit" onSubmit={handleAddContact}>
        <label htmlFor="">
          <p>enter name</p>
          <input
            onInput={handleSetContact}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p>enter phone number</p>
          <input
            onInput={handleSetContact}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <br />
        <button>Add Contact</button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   onAddContact: (contact) => dispatch(actions.addContact(contact)),
// });

// export default connect(
//   (state) => ({ contacts: state.contacts }),
//   mapDispatchToProps
// )(PhonebookForm);
