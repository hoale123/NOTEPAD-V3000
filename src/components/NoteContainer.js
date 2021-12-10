import React, { useState,useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setNotes] = useState([])
  const [searchNotes, setSearchNotes] = useState("")
  const [selectedNotes, setSelectedNotes] = useState({})

  const notesToDisplay = notes.filter(note => note.title.toLowerCase().includes(searchNotes.toLocaleLowerCase()))

  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setNotes(data))
  },[])

  const saveNotes =(note) =>{
    fetch(`http://localhost:3000/note/${note.id}`,{
      method: "PATCH",
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1,
      })
    })
    .then(res => res.json())
    .then(setSelectedNotes)
  }

  const handleAddNotes = (newNotes) => {
    setNotes([...notes, newNotes])
  }
  function handleSelectedNotes (id){ 
    const selectedNote = notes.find(note => note.id === id);
    setSelectedNotes(selectedNote);
  }


  const [noteShow, setNoteShow] = useState({
    edit: false,
    noted: {},
  })
function editOrState(note, noteShow){
  if(noteShow.id !== note.id){
    return {
      edit: false,
      noted: noted,
    }
  }
  return noteShow;
}
  const {edit, noted} = noteShow
  const toggleEdit = () =>{
    setNoteShow({edit : !edit})
  }



  return (
    <>
      <Search onchangeSearch={setSearchNotes} searchNotes={searchNotes} />
      <div className="container">
        <Sidebar 
        onSelectedNote={handleSelectedNotes} 
        onAddNote={handleAddNotes} 
        notes={notesToDisplay} />
        <Content 
        editOrState={editOrState}
        toggleEdit={toggleEdit}
        note={selectedNotes} 
        onSave={saveNotes}
        />
      </div>
    </>
  );
}

export default NoteContainer;
