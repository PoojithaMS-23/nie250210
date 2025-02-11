import Pageheader from "../header/Pageheader";

function FlightCreate() {
    return (
        <>
        <Pageheader PageNumber={2}/>
            <h3><a href="/flights/list" className="btn btn-light">go back</a>New flight</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter flight number"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airname" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airname" placeholder="please enter Airline name"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" placeholder="please enter Source"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="please enter the destination"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter ticket price"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <input type="text" className="form-control" id="capacity" placeholder="please enter capacity"/>
                </div>
                <button className="btn btn-primary">create</button>
            </div>

        </>
    );
}
export default FlightCreate;