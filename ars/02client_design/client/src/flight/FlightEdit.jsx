import Pageheader from "../header/Pageheader";

function FlightEdit() {
    return (
        <>
        <Pageheader PageNumber={1}/>
            <h3><a href="/flights/list" className="btn btn-light">go back</a>edit ticket price</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <div type="text" className="form-control" id="number">???</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airname" className="form-label">Airline name</label>
                    <div type="text" className="form-control" id="airname" >???</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <div type="text" className="form-control" id="source">???</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <div type="text" className="form-control" id="destination">???</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter ticket price"/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <div type="text" className="form-control" id="capacity">???</div>
                </div>
                <button className="btn btn-warning">update price</button>
            </div>
        </>
    );
}
export default FlightEdit;