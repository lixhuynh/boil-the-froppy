import React from "react";
import RecCard from "./RecCard";

interface Props {
  path: { [key: string]: any }[];
}

function RecCardGrid({ path }: Props) {
  return (
    <div className="centered-container">
      <div className="card-grid">
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
