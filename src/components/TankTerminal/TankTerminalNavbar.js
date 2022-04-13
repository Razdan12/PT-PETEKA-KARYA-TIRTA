import { Link } from "react-router-dom";
import React from "react";
import "./css/TankTerminalNavbar.css";
import IconHome from "../TankTerminal/image/25694.png";
import logo from "../TankTerminal/image/logoptk.png";

const TankTerminalNavbar = () => {
	return (
		<div className="row nav">
			<div className="col-6 logo text-left">
				<img clasName="img-fluid" src={logo} alt="logo" />
			</div>
			<div className="col-2 text-left">
				<p>Tank Terminal</p>
			</div>

			<div className="col back text-right">
				<Link to="/">
					<img clasName="img-fluid rounded" src={IconHome} alt="home" />
				</Link>
			</div>
		</div>
	);
};
export default TankTerminalNavbar;
