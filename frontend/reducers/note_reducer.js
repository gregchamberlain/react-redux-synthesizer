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

    case NoteConstants.GROUP_UPDATE:
      return action.notes;

    default:
      return state;
  }
};

const validKeys = ["a"];
const keyMap = {
  a: "bell",
};
//
// const validKeys = ["a","s","d","f","g","h","j"];
// const keyMap = {
//   a: "C5",
//   s: "D5",
//   d: "E5",
//   f: "F5",
//   g: "G5",
//   h: "A5",
//   j: "B5",
// };

export default NotesReducer;
