import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes,onSelectedNote}) {
  return (
    <ul>
      {notes.map(note => {
        return <NoteItem 
        onClick={() => onSelectedNote(note.id)} 
        key={note.id} 
        note={note} 
        title={note.title} 
        caption ={note.body.length > 20 ? note.body.substring(0, 17).concat('...') : note.body}  />
      })}
    </ul>
  );
}

export default NoteList;
