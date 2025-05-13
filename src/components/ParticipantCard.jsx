function ParticipantCard({ participant }) {
  return (
    <div className="participant-card">
      <h3>
        {participant.FirstName} {participant.LastName}
      </h3>
      <p>
        <strong>ID:</strong> {participant.ParticipantID}
      </p>
      <p>
        <strong>City:</strong> {participant.City} {participant.ZipCode}
      </p>
      <p>
        <strong>Primary Concern:</strong> {participant.PrimaryConcern}
      </p>
    </div>
  );
}
export default ParticipantCard;
