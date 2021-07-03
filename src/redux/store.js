import { createStore } from "redux"
import {reducer} from "./phonebookReducer"



export const store = createStore(reducer)

