import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";
import "./Flowers.css";

export const FlowersContext = createContext({
  flowers: [],
  setFlowers: () => {},
  filters: {},
  setFilters: () => {},
});

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

  const filteredFlowers = (() => {
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
  })();

  return (
    <div className="container">
      <div className="app-container">
        <FlowersContext.Provider
          value={{ flowers: filteredFlowers, setFlowers, filters, setFilters }}
        >
          <Filter />
          <Cards />
        </FlowersContext.Provider>
      </div>
    </div>
  );
};

export default Flowers;
