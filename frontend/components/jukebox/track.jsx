import React from 'react';
const Track = ({isRecording, track, isPlaying, onPlay}) => (
  <div>
    {track.name}
    <button disabled={isRecording || isPlaying} onClick={onPlay(track)}>Play</button>
  </div>
);

export default Track;
