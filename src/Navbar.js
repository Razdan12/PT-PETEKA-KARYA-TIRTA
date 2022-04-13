import { Link } from "react-router-dom";
import "./css/navbar.css";
import IconHome from "./img/25694.png";

function Navbar() {
	return (
		<div className="row nav">
			<div className="col logo">lOgo</div>
			<Link to="/">
				<div className="col back">
					{/* <h1>rumah</h1> */}
					<img clasName="img-fluid rounded" src={IconHome} alt="home" />
				</div>
			</Link>
		</div>
	);
}
export default Navbar;
