import { useState } from "react";
import Pageheader from "../header/Pageheader";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FlightCreate() {
    const [flight,setFlights]=useState({id:'',number:'' , airline_name:'',
        source:'',destination:'',capacity:0 ,price:0 })
        const OnBoxChange=(event)=> {
            const newflight={...flight};
            newflight[event.target.id]=event.target.value;
            setFlights(newflight);
        }
        const navigate =useNavigate();
        const Oncreate=async ()=> {
            try{
                const baseUrl='http://localhost:8080'
                const response = await axios.post(`${baseUrl}/flights`,{...flight,capacity:parseInt(flight.capacity),
                    price:parseFloat(flight.price)
                });
                alert(response.data.message)
                navigate('/flights/list');

            }catch(error){
                alert(`server error`);

            }
        }
    return (
        <>
        <Pageheader PageNumber={2}/>
            <h3><a href="/flights/list" className="btn btn-light">go back</a>New flight</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <input type="text" className="form-control" id="number" placeholder="please enter flight number"
                    value={flight.number} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline name</label>
                    <input type="text" className="form-control" id="airline_name" placeholder="please enter Airline name"
                    value={flight.airline_name} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <input type="text" className="form-control" id="source" placeholder="please enter Source"
                    value={flight.source} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <input type="text" className="form-control" id="destination" placeholder="please enter the destination"
                    value={flight.destination} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter ticket price"
                    value={flight.price} onChange={OnBoxChange} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="capacity" className="form-label">Capacity</label>
                    <input type="text" className="form-control" id="capacity" placeholder="please enter capacity"
                    value={flight.capacity} onChange={OnBoxChange} />
                </div>
                <button className="btn btn-primary" onClick={Oncreate}>create</button>
            </div>

        </>
    );
}
export default FlightCreate;