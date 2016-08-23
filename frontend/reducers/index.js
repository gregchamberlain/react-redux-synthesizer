import NotesReducer from './note_reducer';
import TrackReducer from './track_reducer';
import RecordingReducer from './is_recording_reducer';
import isPlayingReducer from './is_playing_reducer';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
  notes: NotesReducer,
  tracks: TrackReducer,
  isRecording: RecordingReducer,
  isPlaying: isPlayingReducer
});

export default RootReducer;
