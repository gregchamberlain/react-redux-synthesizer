import { NoteConstants } from '../actions/note_actions';

const NotesReducer = (state = [], action) => {
  switch (action.type){

    case NoteConstants.KEY_PRESSED:
      if (validKeys.includes(action.key) && !state.includes(keyMap[action.key])) {
        return [...state, keyMap[action.key]];
      } else {
        return state;
      }
    case NoteConstants.KEY_RELEASED:
      let index = state.indexOf(keyMap[action.key]);
      if (index !== -1) {
        let newState = [...state];
        newState.splice(index,1);
        return newState;
      }
      return state;

    default:
      return state;
  }
};

const validKeys = ["a","s","d","f","g"];
const keyMap = {
  a: "C5",
  s: "D5",
  d: "E5",
  f: "F5",
  g: "G5",
};

export default NotesReducer;