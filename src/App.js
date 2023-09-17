import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        name="Sydney"
        phone="111-111-111"
        email="laith@hotmail.com"
        image={{
          url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2048&q=80",
          alt: "altText",
        }}
        favoured={false}
      />
    </div>
  );
}

export default App;
