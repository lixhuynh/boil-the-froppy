import RecCard from "./RecCard";

interface Props {
  path: { [key: string]: any }[];
}

function RecCardGrid({ path }: Props) {
  return (
    <div className="centered-container">
      <div className="card-grid">
        <RecCard
          key={-1}
          name="Jujutsu Kaisen"
          votes={0}
          img={"https://cdn.myanimelist.net/images/anime/1171/109222l.jpg"}
          url={"https://myanimelist.net/anime/40748/Jujutsu_Kaisen"}
        />
        {path.map((card, index) => (
          <RecCard
            key={index}
            name={card.name}
            votes={card.votes}
            img={card.img}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}

export default RecCardGrid;
