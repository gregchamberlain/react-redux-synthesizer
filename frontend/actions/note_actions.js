import tones from '../utils/tones';


export const NoteConstants = {
  KEY_PRESSED: "KEY_PRESSED",
  KEY_RELEASED: "KEY_RELEASED"
};

export const keyPressed = key => ({
  type: NoteConstants.KEY_PRESSED,
  key
});

export const keyReleased = key => ({
  type: NoteConstants.KEY_RELEASED,
  key
});
