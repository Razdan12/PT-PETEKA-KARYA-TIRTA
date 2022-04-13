import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WasteManagement from "./WasteManagement";
import FreshWater from "./FreshWater";
import Home from "./Home";
import "./index.css";
import TankTerminal from "./TankTerminal";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tank-terminal" element={<TankTerminal />} />
      <Route path="/fresh-water" element={<FreshWater />} />
      <Route path="/waste-management" element={<WasteManagement />} />
      
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
