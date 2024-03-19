
function StaffRequests(props) {
    return (
        <div className="bg-light border p-4 m-2">
          <h2>{props.staff.name}</h2>
          <p>{props.staff.position}</p>
        </div>
    )
}

export default StaffRequests