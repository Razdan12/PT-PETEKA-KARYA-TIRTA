import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../WasteManagement/WasteManagementNavbar";
import "./css/wasteManagement.css";
import gambar from "./image/kuda.jpg";


function WasteServis() {
	return (
		<div className="Waste">
			<Navbar />
			<div className="row">
				<div className="col-4 WasteServis text-center">
					<Link className="link" to="/waste-management">
						Servis
					</Link>
				</div>

				<div className="col-4 WasteLocation text-center">
					<Link className="link" to="/waste-location">
						Location
					</Link>
				</div>

				<div className="col-4 WasteArcivment text-center">
					<Link className="link" to="/waste-arcivment">
						Arcivment
					</Link>
				</div>
			</div>

			<div className="row content-WasteServis">
				<div className="col-12 gambar text-center">
					<div className="d-flex text-center">
						<Card style={{ width: '30rem' }}>
							<Card.Img variant="top CardImage" src={gambar} />
							<Card.Body>
								<Card.Title>Lorem Ipsum</Card.Title>
								<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
								</Card.Text>
								
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '30rem' }}>
							<Card.Img variant="top CardImage" src={gambar} />
							<Card.Body>
								<Card.Title>Lorem Ipsum</Card.Title>
								<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
								</Card.Text>
								
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
						<Card style={{ width: '30rem' }}>
							<Card.Img variant="top CardImage" src={gambar} />
							<Card.Body>
								<Card.Title>Lorem Ipsum</Card.Title>
								<Card.Text>
								Some quick example text to build on the card title and make up the bulk of
								the card's content.
								</Card.Text>
								
								<Button variant="primary">Go somewhere</Button>
							</Card.Body>
						</Card>
					
					</div>
					
				</div>
				
			</div>
		</div>
	);
}
export default WasteServis;
