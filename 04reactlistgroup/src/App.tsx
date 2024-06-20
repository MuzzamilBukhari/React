import ListGroup from "./components/ListGroup";

function App() {
  return (
    <>
      <ListGroup
        heading="Cities"
        items={["Karachi", "Hyderabad", "Sukkur", "Nawabshah", "Pindi"]}
        onSelectItem={(item) => console.log(item)}
      />
      <ListGroup
        heading="Fruits"
        items={["Apple", "Mango", "Banana", "Orange"]}
        onSelectItem={(item) => console.log(item)}
      />
    </>
  );
}

export default App;
