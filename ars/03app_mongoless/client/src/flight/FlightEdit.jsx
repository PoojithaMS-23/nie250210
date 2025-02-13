import { useState } from "react";
import Pageheader from "../header/Pageheader";
import { useParams } from "react-router-dom";
import axios from "axios";

function FlightEdit() {
    const [flight,setFlights]=useState({id:'',number:'' , airline_name:'',
            source:'',destination:'',capacity:0 ,price:0.0 })
            const OnBoxChange=(event)=> {
                const newflight={...flight};
                newflight[event.target.id]=event.target.value;
                setFlights(newflight);
            }
    const params=useParams();
    const readById=async()=>{
        //alert(1)
        try{
            const baseUrl='http://localhost:8080'
            const response=await axios.get(`${baseUrl}/flights/${params('id')}`);
            setFlights(response.data);
        }catch(error){
            alert(`Server Error`);
        }
    }

    return (
        <>
        <Pageheader PageNumber={1}/>
            <h3><a href="/flights/list" className="btn btn-light">go back</a>edit ticket price</h3>
            <div className="container">
                <div className="form-group mb-3">
                    <label htmlFor="number" className="form-label">Flight number</label>
                    <div type="text" className="form-control" id="number">{flight.number}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="airline_name" className="form-label">Airline name</label>
                    <div type="text" className="form-control" id="airline_name" >{flight.airline_name}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="source" className="form-label">Source</label>
                    <div type="text" className="form-control" id="source">{flight.source}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="destination" className="form-label">Destination</label>
                    <div type="text" className="form-control" id="destination">{flight.destination}</div>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="price" className="form-label">Ticket Price</label>
                    <input type="text" className="form-control" id="price" placeholder="please enter ticket price" value={flight.price}/>
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