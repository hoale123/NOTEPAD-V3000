import React, { useState } from "react";

function NoteEditor({note,onSave,onCancel}) {
  const [noted, setNote] = useState({
    noted: note,
  })

  const handleChange = (e) => {
    const note = {
      ...noted,
      [e.target.name]: e.target.value,
    }
    setNote({note})
  }

  const saveChanges = (e) => {
    e.preventDefault();
    onSave(note)
  }
  const {title, body} = note
  return (
    <form onSubmit={saveChanges} className="note-editor">
      <input
      type="text"
      name="title" 
      value={title}
      onChange={handleChange}
      />
      <textarea 
      name="body" 
      value={body}
      onChange={handleChange}
      />
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button onClick={onCancel} type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
