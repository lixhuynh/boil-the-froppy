interface Props {
  name: string;
  votes: number;
}

function RecCard({ name, votes }: Props) {
  return (
    <div className="card text-center mb-3" style={{ width: "15rem" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">with {votes} recommendations</p>
      </div>
    </div>
  );
}

export default RecCard;
