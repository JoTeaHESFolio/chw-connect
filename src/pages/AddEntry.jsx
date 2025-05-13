import React from "react";
import EntryForm from "../components/EntryForm";

function AddEntry() {
  return (
    <section>
      <h1>Add Participant Entry</h1>
      <p>
        Please complete the form below to log a new participant or household.
      </p>
      <EntryForm />
    </section>
  );
}

export default AddEntry;
