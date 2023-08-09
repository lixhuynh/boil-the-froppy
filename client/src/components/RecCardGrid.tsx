import RecCard from "./RecCard";

function RecCardGrid() {
  const cardData = [
    { name: "Attack on Titan", numRecs: 0 },
    { name: "Neon Genesis Evangelion", numRecs: 27 },
    { name: "Madoka Magica", numRecs: 969 },
  ];

  return (
    <div className="centered-container">
      <div className="card-grid">
        {cardData.map((card, index) => (
          <RecCard key={index} name={card.name} numRecs={card.numRecs} />
        ))}
      </div>
    </div>
  );
}

export default RecCardGrid;
