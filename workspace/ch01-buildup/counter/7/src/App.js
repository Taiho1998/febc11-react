import koh from "../koh.js";
import Counter from "./Counter.js";
import Header from "./Header.js";

function App() {
  return koh.createElement("div", { id: "app" }, Header, Counter);
}

export default App;
