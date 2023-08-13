import React from "react";
import ReactDOM from "react-dom";

function Note(props) {
  function deleteNote() {
    props.handleDelete(props.id);
  }

  return (
    <div class="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deleteNote}>DELETE</button>
    </div>
  );
}

export default Note;
