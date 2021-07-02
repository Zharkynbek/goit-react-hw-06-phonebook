import { createStore } from "redux"

const initialStore = {
    phonebook: {
        contacts: [],
        filter: ""
    }
}

const reducer = (state = initialStore, action) => {
  switch (action.type) {
    case "phonebook/AddContact":
      return {
        ...state,
        phonebook: {
          ...state.phonebook,
          contacts: [...state.phonebbok.contacts, action.payload]
        }
      }
    default:
      return state
  }
};

export const store = createStore(reducer)

