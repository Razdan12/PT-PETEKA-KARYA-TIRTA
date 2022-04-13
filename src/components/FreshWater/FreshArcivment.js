import { Link } from "react-router-dom";
import FreshWaterNavbar from "../FreshWater/FreshWaterNavbar";
import "./css/freshWater.css";
import "./css/FreshWaterNavbar.css";
import gambar from "./image/gold.png";
import gambar1 from "./image/medal.png";

function FreshArcivment() {
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

			<div className="row content-FreshArcivment">
				<div className="col-6 gambar text-center">
					<img className="" src={gambar1} alt="gambar" />
				</div>
				<div className="col-6 teks">
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
			</div>
			<div className="row content-arcivment">
				<div className="col-6 gambar text-center">
					<img className="" src={gambar1} alt="gambar" />
				</div>
				<div className="col-6 teks">
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
			</div>
			<div className="row content-arcivment">
				<div className="col-6 gambar text-center">
					<img className="" src={gambar} alt="gambar" />
				</div>
				<div className="col-6 teks">
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
			</div>
			<div className="row content-arcivment">
				<div className="col-6 gambar text-center">
					<img className="" src={gambar} alt="gambar" />
				</div>
				<div className="col-6 teks">
					<p>
						What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
						printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown
						printer took a galley of type and scrambled it to make a type
						specimen book. It has survived not only five centuries, but also the
						leap into electronic typesetting, remaining essentially unchanged.
						It was popularised in the 1960s with the release of Letraset sheets
						containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem
						Ipsum.
					</p>
				</div>
			</div>
		</div>
	);
}
export default FreshArcivment;
