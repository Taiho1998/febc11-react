import Counter from "@components/Counter";
import Header from "@components/Header";

function App() {
  return (
    <>
      <div id="app">
        <Header></Header>
        <Counter>5</Counter>
        <Counter></Counter>
      </div>
    </>
  );
}

export default App;
