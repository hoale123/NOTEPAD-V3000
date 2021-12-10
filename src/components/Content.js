import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content({note,onSave,toggleEdit}) {
  // const {id} = note
//   const [noteShow, setNoteShow] = useState({
//     edit: false,
//     noted: null,
//   })
// function editOrState(note, noteShow){
//   if(noteShow.id !== note.id){
//     return {
//       edit: false,
//       noted: noted,
//     }
//   }
//   return noteShow;
// }
//   const {edit, noted} = noteShow
//   const toggleEdit = () =>{
//     setNoteShow({edit : !edit})
//   }
  const getContent = () => {
    if (true) {
      return <NoteEditor 
      note={note} 
      onSave={onSave}
      onCancel = {toggleEdit}
      />;
    } else if (true) {
      return <NoteViewer 
      note={note}
      onEdit={toggleEdit}
       />;
    } else {
        return <Instructions />
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
// key={note.id} note={note}