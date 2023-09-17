import { useState } from "react";
import heartFilled from "../../svg/heartFilled.svg";
import heartOutlined from "../../svg/heartOutlined.svg";
import "./Card.css";

const Card = ({ name, phone, email, image, favoured }) => {
  const [isFavoured, setIsFavoured] = useState(favoured);

  const clickHandler = () => {
    setIsFavoured(!isFavoured);
  };

  return (
    <div className="card">
      <div className="card-header">
        <img src={image.url} alt={image.alt} className="card-img" />
        <button className="heart" onClick={clickHandler}>
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
    </div>
  );
};

export default Card;
