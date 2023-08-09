interface Props {
  name: string;
  numRecs: number;
}

function RecCard({ name, numRecs }: Props) {
  return (
    <div className="card text-center mb-3" style={{ width: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">with {numRecs} recommendations</p>
      </div>
    </div>
  );
}

export default RecCard;
