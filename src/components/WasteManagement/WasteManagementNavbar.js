import { Link } from "react-router-dom";
import React from "react";
import "./css/WasteManagementNavbar.css";
import IconHome from "../WasteManagement/image/25694.png";
import logo from "../WasteManagement/image/logoptk.png";

const WasteManagementNavbar = () => {
	return (
		<div className="row nav">
			<div className="col-6 logo text-left">
				<img clasName="img-fluid" src={logo} alt="logo" />
			</div>

			<div className="col back text-right">
				<Link to="/">
					<img clasName="img-fluid rounded" src={IconHome} alt="home" />
				</Link>
			</div>
		</div>
	);
};
export default WasteManagementNavbar;
