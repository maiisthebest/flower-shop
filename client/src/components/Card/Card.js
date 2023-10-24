import { useContext, useState } from "react";
import heartFilled from "../../svg/heartFilled.svg";
import heartOutlined from "../../svg/heartOutlined.svg";
import { FlowersContext } from "../Flowers/Flowers";
import "./Card.css";

const Card = ({ name, phone, email, image, favoured, index }) => {
  const { flowers, setFlowers } = useContext(FlowersContext);
  const [isFavoured, setIsFavoured] = useState(favoured);

  const updateFavourite = (index, favoured) => {
    const updatedFlowers = [...flowers];
    updatedFlowers[index].favoured = favoured;

    setFlowers(updatedFlowers);
  };

  const toggleFavourite = () => {
    updateFavourite(index, !isFavoured);
    setIsFavoured(!isFavoured);
  };

  return (
    <article className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img" />
        <button className="heart" onClick={toggleFavourite}>
          {isFavoured ? (
            <img src={heartFilled} alt="filled heart" />
          ) : (
            <img src={heartOutlined} alt="outlined heart" />
          )}
        </button>
      </div>

      <div className="card-content">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
      </div>
    </article>
  );
};

export default Card;
