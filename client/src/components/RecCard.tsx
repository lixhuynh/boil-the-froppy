interface Props {
  name: string;
  votes: number;
  img: string;
  url: string;
}

function RecCard({ name, votes, img, url }: Props) {
  return (
    <div className="card text-center mb-3">
      <a href={url}>
        <img className="card-img-top" src={img} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {votes == 0 && <p className="card-text">you're starting here!</p>}
        {votes > 0 && <p className="card-text">{votes} recs from previous</p>}
      </div>
    </div>
  );
}

export default RecCard;
