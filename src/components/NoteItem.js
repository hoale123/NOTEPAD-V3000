import React from "react";

function NoteItem({note,onClick}) {
  // function handleClick(){
  //   onSelectedNote(note)
  // }
  return (
    <li onClick={onClick} >
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </li>
  );
}

export default NoteItem;
