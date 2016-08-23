import { TracksConstants } from '../actions/tracks_actions';

let currentTrackId = 0;
let currentTrack, timeSlice, newRoll;
const tracks = (state = {}, action) => {
  switch (action.type) {
    case TracksConstants.START_RECORDING:
      currentTrackId++;
      return Object.assign({}, state, {[currentTrackId]: {
        id: currentTrackId,
        name: `Track ${currentTrackId}`,
        roll: [],
        timeStart: action.timeNow
      }});
    case TracksConstants.STOP_RECORDING:
      currentTrack = Object.assign({}, state[currentTrackId]);
      timeSlice = action.timeNow - currentTrack.timeStart;
      newRoll = [...currentTrack.roll, { notes: [], timeSlice}];
      currentTrack.roll = newRoll;
      return Object.assign({}, state, {[currentTrackId]: currentTrack});
    case TracksConstants.ADD_NOTES:
      currentTrack = Object.assign({}, state[currentTrackId]);
      timeSlice = action.timeNow - currentTrack.timeStart;
      newRoll = [...currentTrack.roll, { notes: action.notes, timeSlice}];
      currentTrack.roll = newRoll;
      return Object.assign({}, state, {[currentTrackId]: currentTrack});
    default:
      return state;
  }
};

export default tracks;
