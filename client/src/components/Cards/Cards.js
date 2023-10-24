import { useContext } from "react";
import Card from "../Card/Card";
import { FlowersContext } from "../Flowers/Flowers";
import "./Cards.css";

const Cards = () => {
  const { flowers } = useContext(FlowersContext);

  return (
    <div className="flower-cards-container">
      {flowers.map((flower, index) => (
        <Card
          key={flower.id}
          name={flower.name}
          phone={flower.phone}
          email={flower.email}
          image={flower.image}
          favoured={flower.favoured}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards;
