import Cards from "./components/Cards/Cards";
import flowers from "./mocks/flowers";

function App() {
  return (
    <div>
      <Cards flowers={flowers} />
    </div>
  );
}

export default App;
