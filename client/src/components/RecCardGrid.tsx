import RecCard from "./RecCard";

function RecCardGrid() {
  return (
    <div className="centered-container">
      <div className="card-grid">
        <RecCard name="Attack on Titan" numRecs={5} />
      </div>
    </div>
  );
}

export default RecCardGrid;
