import NotesReducer from './note_reducer';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  notes: NotesReducer
});

export default RootReducer;
