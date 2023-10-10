import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import "./Flowers.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);

  const fetchFlowers = async () => {
    const response = await axios.get("http://localhost:4000/flowers");
    setFlowers(response.data);
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

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
