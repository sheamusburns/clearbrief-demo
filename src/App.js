import './App.css';
import Navbar from "./Navbar";
import Team from "./Team";


function MeetTheTeam() {
  return (
    <div className="main-container">
      <div className="top-bar">
        <img className="main-logo" src="https://clearbrief.com/_next/static/media/logo-transparent.06ed5e68.svg"
             alt="ClearBrief logo"/>
        <Navbar/>
      </div>

      <div className="content-container">
        <h1 className="main-heading text-noto-400">Meet Our Team</h1>
        <h2 className="subheading text-playfair-200">We're modernizing the justice system, brief by brief.</h2>
        <Team/>
      </div>
    </div>
  );
}

export default MeetTheTeam;
