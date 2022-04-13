import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WasteManagement from "./WasteManagement";
import FreshWater from "./FreshWater";
import Home from "./Home";
import "./index.css";
import TankTerminal from "./TankTerminal";
import ThankLocation from "./components/TankTerminal/TankLocation";
import ThankArcivment from "./components/TankTerminal/TankArcivment";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tank-terminal" element={<TankTerminal />} />
      <Route path="/fresh-water" element={<FreshWater />} />
      <Route path="/waste-management" element={<WasteManagement />} />
      <Route path="/tank-location" element={<ThankLocation />} />
      <Route path="/tank-arcivment" element={<ThankArcivment />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
