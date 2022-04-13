import { Link } from "react-router-dom";
import React from "react";
import "../css/navbar.css";
import IconHome from "../img/25694.png";
import logo from "./freshManagement/image/logoptk.png";

const FreshManagementNavbar = () => {
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
export default FreshManagementNavbar;
