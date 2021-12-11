import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes,onClickSideBar}) {
  return (
    <ul>
      {notes.map(note => {
        return <NoteItem 
        onClickSideBar={onClickSideBar} 
        key={note.id} 
        note={note} 
        title={note.title} 
        caption ={note.body.length > 20 ? note.body.substring(0, 17).concat('...') : note.body}  />
      })}
    </ul>
  );
}

export default NoteList;
