import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/index";
import About from "./Pages/About/index";
import Contact from "./Pages/Contact/index";
import BuyAirtime from "./Pages/BuyAirtime/buyAirtime"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<BuyAirtime />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
