import { createStore } from "redux"

const initialStore = {
    phonebook: {
        contacts: [],
        filter: ""
    }
}

const reducer = (store = initialStore , action) => {
  return store;
};

export const store = createStore(reducer)

