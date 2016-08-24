import React from 'react';
const NoteKey = ({note, active}) => (
  <div className={`note-key${active ? " active" : ""}`}>{note}</div>
);

export default NoteKey;
