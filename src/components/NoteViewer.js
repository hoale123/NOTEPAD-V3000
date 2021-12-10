import React from "react";

function NoteViewer({note,onEdit}) {
  const {title, body} = note
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onEdit} >Edit</button>
    </>
  );
}

export default NoteViewer;
