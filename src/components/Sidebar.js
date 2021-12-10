import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes,onAddNote,onSelectedNote}) {
  function handleNewClick(){
    const newNotes={
      title: "default",
      body: "placeholder"

    }
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotes),
    })
      .then((r) => r.json())
      .then(onAddNote)
  }
  return (
    <div className="master-detail-element sidebar">
      <NoteList onSelectedNote={onSelectedNote} notes={notes} />
      <button onClick={handleNewClick} >New</button>
    </div>
  );
}

export default Sidebar;
