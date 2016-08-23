import {connect} from 'react-redux';
import Recorder from './recorder';
import {startRecording, stopRecording} from '../../actions/tracks_actions';
const mapStateToProps = (state)=> ({
  isRecording: state.isRecording,
  isPlaying: state.isPlaying,
  tracks: state.tracks
});

const mapDispatchToProps = (dispatch) => ({
  stopRecording: ()=>dispatch(stopRecording()),
  startRecording: ()=>dispatch(startRecording())
});

export default connect(mapStateToProps,mapDispatchToProps)(Recorder);
