import { connect } from 'react-redux';
import { groupUpdate } from '../../actions/note_actions';
import { startPlaying, stopPlaying } from '../../actions/playing_actions';
import jukebox from './jukebox';

const mapStateToProps = (state) => ({
  tracks: state.tracks,
  isPlaying: state.isPlaying,
  isRecording: state.isRecording
});


const mapDispatchToProps = (dispatch) => ({
  onPlay: (track) => e => {
    dispatch(startPlaying());
    let playbackStartTime = Date.now();
    let currNote = 0;
    let timeElapsed;
    let interval = setInterval(() => {
      if (currNote < track.roll.length) {
        if (Date.now()-playbackStartTime > track.roll[currNote].timeSlice) {
          dispatch(groupUpdate(track.roll[currNote].notes));
          currNote++;
        }
      } else {
        clearInterval(interval);
        dispatch(stopPlaying());

      }
    },10);

  }

  // startPlaying: ()=>dispatch(startPlaying()),
  // stopPlaying: ()=>dispatch(stopPlaying())
});

export default connect(mapStateToProps,mapDispatchToProps)(jukebox);
