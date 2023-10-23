import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import "./Flowers.css";

const Flowers = () => {
  const [flowers, setFlowers] = useState([]);
  const [filters, setFilters] = useState({
    colour: "any",
    favoured: "any",
  });

  const fetchFlowers = async () => {
    const response = await axios.get("http://localhost:4000/flowers");
    setFlowers(response.data);
  };

  useEffect(() => {
    fetchFlowers();
  }, []);

  function getFilteredFlowers() {
    let filteredFlowers = [...flowers];

    if (filters.favoured !== "any") {
      filteredFlowers = filteredFlowers.filter(
        (flower) =>
          flower.favoured === (filters.favoured === "favoured" ? true : false)
      );
    }

    if (filters.colour !== "any") {
      filteredFlowers = filteredFlowers.filter(
        (flower) => flower.colour === filters.colour
      );
    }

    return filteredFlowers;
  }

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilters={setFilters} />
        <Cards flowers={getFilteredFlowers()} setFlowers={setFlowers} />
      </div>
    </div>
  );
};

export default Flowers;
