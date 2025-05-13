import React, { useEffect, useState } from "react";
import { fetchParticipantsFromSheet } from "../utils/api";
import ParticipantCard from "../components/ParticipantCard";

function Participants() {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetchParticipantsFromSheet().then((data) => setParticipants(data));
  }, []);

  return (
    <section>
      <h1>Participants</h1>
      <p>This page provides a demo listing of participants and encounters.</p>
      {participants.length === 0 ? (
        <p>Loading participant data...</p>
      ) : (
        <div>
          {participants.map((p, index) => (
            <ParticipantCard key={index} participant={p} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Participants;
