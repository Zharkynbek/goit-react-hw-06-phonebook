import React from "react"

const PhonebookList = ({ contacts, onDeleteContacts }) => (
  <ul>
    {contacts.map(({ name, number, id }) => (
      <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button onClick={() => onDeleteContacts(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default PhonebookList;