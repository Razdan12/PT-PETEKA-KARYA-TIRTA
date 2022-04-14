import "./css/home.css"
import logo from "./img/Group 1.png"
import arrow from "./img/13-130767_point-arrow-png-transparent-png-removebg-preview 1.png"
import qmRed from "./img/qm merah 1.png"
import qmBlue from "./img/qm blue.png"
import qmGreen from "./img/qm green 1.png"
import { Link } from "react-router-dom";

function Home(){
    return(
    <section id="home">
        <div  className="home">
            <div className="header">
                <p className="NameHeader">
                    PT.PETEKA KARYA TIRTA
                </p>
                <p className="NameTagLine">
                Enhancing Your Logistic Agility
                </p>
                
            </div>
            <div className="row">
            <div className="container col-3">
                <Link to="/tank-terminal">
                    <div className="BtnTankTerminal">
                        <center>
                        <p>
                        Tank Terminal    
                        </p></center>
                    </div>
                </Link>
                <Link to="/fresh-water">
                    <div className="FreshWater">
                        <parseInt>
                        Fresh Water  
                        </parseInt>
                    </div>
                </Link>
                <Link to="/waste-management">
                    <div className="WasteManagement">
                        <p>
                    Waste Management    
                        </p>
                    </div>
                </Link>
            </div>
            <div className="col-5 kotakImg text-center">
                <img className="img-fluid rounded-circle" src={logo} alt="logo"/>
                <img className="img-fluid arrow" src={arrow} alt="logo"/>
            </div>
            
            <div className="containerKotakBlue col-4 text-right">
            <img className="img-fluid qmBlue" src={qmBlue} alt="qmBlue"/>
            <img className="img-fluid qmRed" src={qmRed} alt="qmRed"/>
            <img className="img-fluid qmGreen" src={qmGreen} alt="qaGreen"/>
            </div>
        </div>
        </div>
    </section>
    )
}
export default Home;