import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import "./Flowers.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [filteredFlowers, setFilteredFlowers] = useState([]);
  const [filters, setFilters] = useState({
    colour: "any",
    favoured: "any",
  });

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

    if (filters.favoured !== "any") {
      filteredFlowersTemp = filteredFlowersTemp.filter(
        (flower) =>
          flower.favoured === (filters.favoured === "favoured" ? true : false)
      );
    }

    if (filters.colour !== "any") {
      filteredFlowersTemp = filteredFlowersTemp.filter(
        (flower) => flower.colour === filters.colour
      );
    }

    setFilteredFlowers(filteredFlowersTemp);
  }, [filters]);

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilters={setFilters} />
        <Cards flowers={filteredFlowers} setFlowers={setFlowers} />
      </div>
    </div>
  );
};

export default Flowers;
