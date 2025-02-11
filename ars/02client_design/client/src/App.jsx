import Counter from "./Counter"
import FlightCreate from "./flight/FlightCreate"
import FlightEdit from "./flight/FlightEdit"
import FlightList from "./flight/FlightList"
import FullName from "./FullName"
import Pageheader from "./header/Pageheader"
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="" element={<FlightList/>}/>
        <Route  path="/flights/list" element={<FlightList/>}/>
        <Route  path="/flights/create" element={<FlightCreate/>}/>
        <Route  path="flights/edit/:id" element={<FlightEdit/>}/>
        </Routes>
        </BrowserRouter>
        
    </div>
    
    <FullName/>
    
    
     
    </>
  )
}

export default App
