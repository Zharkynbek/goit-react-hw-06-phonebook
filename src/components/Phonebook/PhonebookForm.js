import React from "react";


const PhonebookForm = ({ onAddContact, onChangeNumber, onChangeName, name, number }) => {
  return (
    <div>
      <form action="submit" onSubmit={onAddContact}>
        <label htmlFor="">
          <p>enter name</p>
          <input
            onInput={(e) => onChangeName(e.target.value)}
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
            onInput={(e) => onChangeNumber(e.target.value)}
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
};

export default PhonebookForm;
