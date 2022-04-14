import { Link } from "react-router-dom";
import FreshWaterNavbar from "../FreshWater/FreshWaterNavbar";
import "./css/freshWater.css";
import { Card } from "react-bootstrap";
import tabung from "./image/tabung.png";
import tabung2 from "./image/tabung2.png";
import man from "./image/man.png";

function FreshServis() {
	return (
		<div className="tank">
			<FreshWaterNavbar />

			<div className="row">
				<div className="col-4 frehServis text-center">
					<Link className="link" to="/fresh-water">
						Servis
					</Link>
				</div>

				<div className="col-4 freshLocation text-center">
					<Link className="link" to="/fresh-location">
						Location
					</Link>
				</div>

				<div className="col-4 FreshArcivment text-center">
					<Link className="link" to="/fresh-arcivment">
						Arcivment
					</Link>
				</div>
			</div>

			<div className="row content-FreshServis">
				<div className="col-12 gambar card1">
					<div className="d-flex text-center">
						<Card style={{ width: "42rem" }}>
							<Card.Img variant="top" src={tabung} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: "42rem" }}>
							<Card.Img variant="top" src={tabung2} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
						<Card style={{ width: "42rem" }}>
							<Card.Img variant="top" src={man} />
							<Card.Body>
								<Card.Title>Card Title</Card.Title>
								<Card.Text>
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</Card.Text>
							</Card.Body>
							<Card.Body>
								<Card.Link href="#">Card Link</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
export default FreshServis;
