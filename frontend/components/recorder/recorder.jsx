import React from 'react';

const Recorder = ({isRecording, tracks, stopRecording, startRecording, isPlaying})=>(
  <div>
    <button onClick={startRecording} disabled={isRecording || isPlaying}>Start</button>
    <button onClick={stopRecording} disabled={!isRecording || isPlaying}>Stop</button>

  </div>
);

export default Recorder;
