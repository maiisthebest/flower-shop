import "./Flowers.css";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";
import flowers from "../../mocks/flowers";

const Flowers = () => {
  return (
    <div className="container">
      <div className="app-container">
        <Filter />
        <Cards flowers={flowers} />
      </div>
    </div>
  );
};

export default Flowers;
