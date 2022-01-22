import React from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

function Content({selectedNotes,toggleIsEdit,isEdit,isSelected}) {

  const toggleEdit = () =>{
    toggleIsEdit(true)
  }

  const getContent = () => {
    if (isEdit) {
      return <NoteEditor 
      note={selectedNotes} 
      // onSave={onSave}
      onCancel = {toggleIsEdit}
      />;
    } else if (isSelected) {
      return <NoteViewer 
      note={selectedNotes}
      onEdit={toggleEdit}
       />;
    } else {
        return <Instructions />
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;