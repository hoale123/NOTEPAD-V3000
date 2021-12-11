import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, onClickSideBar, setAllNotes}) {
  function handleNewClick(){
    const newNotes={
      title: "default",
      body: "placeholder",
      userId: 1,
    }
    setAllNotes([...notes, newNotes])
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotes),
    })
      .then((r) => r.json())
  }
  return (
    <div className="master-detail-element sidebar">
      <NoteList onClickSideBar={onClickSideBar} 
      // onSelectedNote={onSelectedNote} 
      notes={notes} />
      <button onClick={handleNewClick} >New</button>
    </div>
  );
}

export default Sidebar;
