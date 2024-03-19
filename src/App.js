import StaffRequest from "./Staff";

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
  return (
    <div>
      <h1>Stream</h1>
      { stafflist.map( s => <StaffRequest staff={s}/> ) }
    </div>
  );
}

export default App;
