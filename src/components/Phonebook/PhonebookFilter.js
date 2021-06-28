import React from "react"


const PhonebookFilter = ({ filterName, onChangeFilter }) => {
  return (
    <>
    <div className="PhonebookFilter">
      <label>
        <p>filter contacts</p>
        <input
          type="text"
          name="filter"
          id=""
          value={filterName}
          onInput={onChangeFilter}
        />
      </label>
    </div>
    <h3>Contacts</h3>
    </>
  );
};



export default PhonebookFilter;