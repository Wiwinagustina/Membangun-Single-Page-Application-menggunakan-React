import React from "react";
import { addNote } from "../utils/data";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();

  function onAddContactHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h2>Create Contact</h2>
      <NoteInput addNote={onAddContactHandler} />
    </section>
  );
}

export default AddPage;
