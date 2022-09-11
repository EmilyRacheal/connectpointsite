import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar/index";
import Header from "./Pages/Header/index";
import Services from "./components/Services/index";
import AppDownload from "./components/AppDownload/index";
import Partners from "./components/Partners/index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Services />
      <AppDownload />
      <Partners />
    </div>
  );
}

export default App;
