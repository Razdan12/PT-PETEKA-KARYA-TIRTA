import { Link } from "react-router-dom";
import React from "react";
import "./css/FreshWaterNavbar.css";
import IconHome from "../FreshWater/image/25694.png";
import logo from "../FreshWater/image/logoptk.png";

const FreshWaterNavbar = () => {
	return (
		<div className="row nav">
			<div className="col-6 logo text-left">
				<img clasName="img-fluid" src={logo} alt="logo" />
			</div>
			<div className="col-2 text-left">
				<p>Fresh Water</p>
			</div>

			<div className="col back text-right">
				<Link to="/">
					<img clasName="img-fluid rounded" src={IconHome} alt="home" />
				</Link>
			</div>
		</div>
	);
};
export default FreshWaterNavbar;
