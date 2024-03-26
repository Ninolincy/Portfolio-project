import StaffRequest from "./Staff";
import { useState } from "react";
import logo from './logo.jpg';
import './App.css';

const stafflist = [
  {
    id: 1,
    name: "John",
    position: "Developer",
    request: "System reboot"
  },
  {
    id: 2,
    name: "Jane",
    position: "Designer",
    request: "Sick Leave",
  },
  {
    id: 3,
    name: "Tom",
    position: "Manager",
    request: "Vacation",
  },
];

function App() {
  const [showLogo, setShowLogo] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [showStaffRequests, setShowStaffRequests] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleStreamClick = () => {
    setShowLogo(true);
    setShowIntroduction(true);
    setShowGetStarted(true);
  };

  const handleGetStartedClick = () => {
    setShowStaffRequests(true);
  };

  return (
    <div>
      <header>
      <h1><a href="#introduction" onClick={handleStreamClick} style={{ display: "flex", alignItems: "center"}}>
        { showLogo && <img src={logo} alt="Stream logo" style={{ width: 30, marginRight: 10 }} />}
        Stream
        </a>
        </h1>
      {showIntroduction && (
        <h2 id="introduction">Work Flows</h2>
      )}
      <p>Stream is a platform that allows you to manage your staff requests</p>
      {showGetStarted && (
        <div>
        <button>Log in</button>
        <button onClick={() => setShowStaffRequests(true)}>Get Started</button>
        </div>
        )}
          </header>
          {showStaffRequests && (
            <main> 
          <h3>Staff Requests</h3>
          { stafflist.map( s => <StaffRequest staff={s}/> ) }
          </main>
          )}
    </div>
  );
}

export default App;
