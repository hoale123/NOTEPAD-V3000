import React from "react";

function NoteItem({note,onClickSideBar}) {
  function handleSideBarClick(){
    onClickSideBar(note)
  }
  return (
    <li onClick={handleSideBarClick} >
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </li>
  );
}

export default NoteItem;
