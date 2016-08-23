import React from 'react';
const NoteKey = ({note, active}) => (
  <div style={{color: active ? "red" : "black", fontWeight: active ? "bold" : "normal"}}>{note}</div>
);

export default NoteKey;
