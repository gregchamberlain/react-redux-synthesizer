import React from 'react';
import Track from './track'

const jukebox = ({onPlay, tracks, isPlaying, isRecording})=> (
    <div>
      <h3>Recorded Tracks</h3>
      {Object.keys(tracks).map((el) => (
        <Track key={tracks[el].name}  track={tracks[el]} onPlay={onPlay} isPlaying={isPlaying} isRecording={isRecording}/>
      ))}
    </div>
);

export default jukebox;
