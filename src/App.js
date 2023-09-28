import Cards from "./components/Cards/Cards";
import Filter from "./components/Filter/Filter";
import flowers from "./mocks/flowers";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Filter />
      <Cards flowers={flowers} />
    </div>
  );
}

export default App;
