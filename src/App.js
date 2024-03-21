import StaffRequest from "./Staff";
import { useState } from "react";
import logo from './logo.jpg';

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
  const [showIntroduction, setShowIntroduction] = useState(false);
  const [showStaffRequests, setShowStaffRequests] = useState(false);

  const handleStreamClick = () => {
    setShowIntroduction(true);
  };

  const handleGetStartedClick = () => {
    setShowStaffRequests(true);
  };
  return (
    <div>
      <header>
      <h1><a href="#introduction" onClick={handleStreamClick}><img src={logo} alt="Stream Logo" />Stream</a></h1>
      {showIntroduction && (
        <h2 id="introduction">Work Flows</h2>
      )}
      <p>Stream is a platform that allows you to manage your staff requests</p>
        <button onClick={handleGetStartedClick}>Get Started</button>
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
