import React from 'react';
import TONES from '../../utils/tones';
const NOTE_NAMES = Object.keys(TONES);
import Note from '../../utils/note';
import $ from 'jquery';
import NoteKey from './note_key';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = NOTE_NAMES.map((note,idx) => {
      return new Note(TONES[note]);
    });
    $(document).on('keydown',(e)=>{
      this.onKeyDown(e);
    });
    $(document).on('keyup',(e)=>{
      this.onKeyUp(e);
    });
  }

  playNote() {
    NOTE_NAMES.forEach((el,idx) => {
      if (this.props.notes.includes(el)){
        this.notes[idx].start();
      } else {
        this.notes[idx].stop();
      }
    });
  }

  onKeyDown(e){
    let letter = String.fromCharCode(e.keyCode).toLowerCase();
    this.props.keyPressed(letter);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  onKeyUp(e){
    let letter = String.fromCharCode(e.keyCode).toLowerCase();
    this.props.keyReleased(letter);
    if (this.props.isRecording) {
      this.props.addNotes(this.props.notes);
    }
  }

  render() {
    this.playNote();

    const notes = NOTE_NAMES.map(note => (
      <NoteKey
        active={this.props.notes.includes(note)}
        note={note}
        key={note}/>
    ));

    return(
      <div className="synth">{notes}</div>
    );
  }

}

export default Synth;
