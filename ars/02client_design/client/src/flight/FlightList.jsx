import Pageheader from "../header/Pageheader";

function FlightList() {
    return (
        <>
            <Pageheader PageNumber={1}/>
            <h3>List of flights</h3>
            <div className="container">
                <table className="table table-success table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">flight_number</th>
                            <th scope="col">Airline name</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">AI 845</th>
                            <td className="text-primary">Air India</td>
                            <td>Mumbai</td>
                            <td>Abu Dhabi</td>
                            <td><a href="/flights/edit/10234590" className="btn btn-warning">edit</a>
                                <button className="btn btn-danger">delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">6E 108</th>
                            <td className="text-primary">Indigo</td>
                            <td>Bengaluru</td>
                            <td>Delhi</td>
                            <td><a href="/flights/edit/10234598" className="btn btn-warning">edit</a>
                                <button className="btn btn-danger">delete</button></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </>
    );
}
export default FlightList;