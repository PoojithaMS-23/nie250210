import EmpCreate from "./emp/EmpCreate"
import EmpEdit from "./emp/EmpEdit"
import EmpList from "./emp/EmpList"
import PageHeader from "./header/PageHeader"
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  

  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route  path="" element={<EmpList/>}/>
        <Route  path="/emps/list" element={<EmpList/>}/>
        <Route  path="/emps/create" element={<EmpCreate/>}/>
        <Route  path="/emps/edit/:id" element={<EmpEdit/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    
    </>
  )
}

export default App
