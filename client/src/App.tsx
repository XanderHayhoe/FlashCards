import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Deck from "./components/deck/Deck";
import path from "path";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Deck />
    </div>
  );
}

export default App;
