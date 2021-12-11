import React, { useState } from "react";

function NoteEditor({note,onCancel}) {
  const [noteTitle, setNoteTitle] = useState(note.title)
  const [noteBody, setNoteBody] = useState(note.body)


  const saveChanges = (e) => {
    e.preventDefault();
    let editedNote = {
      userId: note.userId,
      title: noteTitle,
      body: noteBody
    }
    fetch(`http://localhost:3000/notes/${note.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(editedNote),
    })
    note.title = noteTitle
    note.body = noteBody
    onCancel(false)
  }
  const handleNoteCancel = () => {
    setNoteTitle(note.title)
    setNoteBody(note.body)
    onCancel(false)
  }
  // const {title, body, id} = note
  return (
    <form className="note-editor">
      <input
      type="text"
      name="title" 
      value={noteTitle}
      onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea 
      name="body" 
      value={noteBody}
      onChange={(e)=> setNoteBody(e.target.value)}
      />
      <div className="button-row">
        <input 
        className="button" 
        type="submit" 
        value="Save" 
        onClick={(e) => saveChanges(e)}/>
        <button onClick={handleNoteCancel} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
