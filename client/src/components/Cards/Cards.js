import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ flowers, setFlowers }) => {
  const updateFavourite = (index, favoured) => {
    const updatedFlowers = [...flowers];
    updatedFlowers[index].favoured = favoured;

    setFlowers(updatedFlowers);
  };
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
          updateFavourite={updateFavourite}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards;
