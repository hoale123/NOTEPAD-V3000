import React, { useState,useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [notes, setAllNotes] = useState([])
  const [selectedNotes, setSelectedNotes] = useState("")
  const [searchNotes, setSearchNotes] = useState("")
  const [isEdit, toggleIsEdit] = useState(false)
  const [isSelected, setIsSelected] = useState(false)


  const displayNote = notes.filter((note) => {
    if (searchNotes === "") return true;
    return note.title.toUpperCase().includes(searchNotes.toUpperCase()) 
  })


  useEffect(() => {
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => setAllNotes(data))
  },[])

  const onClickSideBar = (note) => {
    setSelectedNotes(note)
    setIsSelected(true)
    toggleIsEdit(false)
  }
  // const saveNotes =(note) =>{
  //   fetch(`http://localhost:3000/note/${note.id}`,{
  //     method: "PATCH",
  //     headers: {
  //       'Content-Type' : 'application/json',
  //       'Accept' : 'application/json',
  //     },
  //     body: JSON.stringify({
  //       title: note.title,
  //       body: note.body,
  //       user_id: 1,
  //     })
  //   })
  //   .then(res => res.json())
  //   .then(setSelectedNotes)
  // }

  // const handleAddNotes = (newNotes) => {
  //   setNotes([...notes, newNotes])
  // }
  // function handleSelectedNotes (id){ 
  //   const selectedNote = notes.find(note => note.id === id);
  //   setSelectedNotes(selectedNote);
  // }

  return (
    <>
      <Search onchangeSearch={setSearchNotes} searchNotes={searchNotes} />
      <div className="container">
        <Sidebar 
        onClickSideBar = {onClickSideBar}
        // onSelectedNote={handleSelectedNotes} 
        // onAddNote={handleAddNotes} 
        setAllNotes={setAllNotes}
        notes={displayNote} />
        <Content 
        selectedNotes={selectedNotes} 
        isEdit={isEdit}
        isSelected={isSelected}
        // onSave={saveNotes}
        toggleIsEdit={toggleIsEdit}
        />
      </div>
    </>
  );
}

export default NoteContainer;
