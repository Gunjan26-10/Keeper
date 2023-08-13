import React, { useState } from "react";

function CreateArea(props) {
  const [noteItem, setNoteItem] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteItem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function onPress(event) {
    props.handleClick(noteItem);
    event.preventDefault();
    setNoteItem({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={(e) => handleChange(e)}
          name="title"
          value={noteItem.title}
          placeholder="Title"
        />
        <textarea
          onChange={(e) => handleChange(e)}
          name="content"
          value={noteItem.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={onPress}>ADD</button>
      </form>
    </div>
  );
}

export default CreateArea;
