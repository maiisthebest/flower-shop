import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ flowers }) => {
  return (
    <div className="flower-cards-container">
      {flowers.map((flower) => (
        <Card
          key={flower.id}
          name={flower.name}
          phone={flower.phone}
          email={flower.email}
          image={flower.image}
          favoured={flower.favoured}
        />
      ))}
    </div>
  );
};

export default Cards;
