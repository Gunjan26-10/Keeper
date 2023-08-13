import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleClick(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea handleClick={handleClick} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          handleDelete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}
export default App;
