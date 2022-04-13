import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WasteManagement from "./WasteManagement";
import FreshWater from "./FreshWater";
import Home from "./Home";
import "./index.css";
import TankTerminal from "./TankTerminal";
import ThankLocation from "./components/TankTerminal/TankLocation";
import ThankArcivment from "./components/TankTerminal/TankArcivment";
import FreshLocation from "./components/FreshWater/FreshLocation";
import FreshArcivment from "./components/FreshWater/FreshArcivment";
import WasteLocation from "./components/WasteManagement/WasteLocation";
import WasteArcivment from "./components/WasteManagement/WasteArcivment";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tank-terminal" element={<TankTerminal />} />
      <Route path="/fresh-water" element={<FreshWater />} />
      <Route path="/waste-management" element={<WasteManagement />} />
      <Route path="/tank-location" element={<ThankLocation />} />
      <Route path="/tank-arcivment" element={<ThankArcivment />} />
      <Route path="/fresh-location" element={<FreshLocation />} />
      <Route path="/fresh-arcivment" element={<FreshArcivment />} />
      <Route path="/waste-location" element={<WasteLocation />} />
      <Route path="/waste-arcivment" element={<WasteArcivment />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
