import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import "./Flowers.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [filters, setFilters] = useState({
    colour: "any",
  });
  const [filteredFlowers, setFilteredFlowers] = useState([]);

  const fetchFlowers = async () => {
    const response = await axios.get("http://localhost:4000/flowers");
    setFlowers(response.data);
    setFilteredFlowers(response.data);
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  useEffect(() => {
    let filteredFlowersTemp = [...flowers];

    if (filters.colour !== "any") {
      filteredFlowersTemp = flowers.filter(
        (flower) => flower.colour === filters.colour
      );
    }

    setFilteredFlowers(filteredFlowersTemp);
  }, [filters]);

  return (
    <div className="container">
      <div className="app-container">
        <Filter setFilters={setFilters} />
        <Cards flowers={filteredFlowers} />
      </div>
    </div>
  );
};

export default Flowers;
