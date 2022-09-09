import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/index";
import Header from "./Pages/Header/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
