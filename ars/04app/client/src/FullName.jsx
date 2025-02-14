import { useState } from "react"

function FullName(){
    const [person,setperson]=useState({first_name:'rahul',last_name:'dravid'})
    const onChangeBox=(event)=>{
        const newperson={...person};
        newperson[event.target.id]=event.target.value;
        setperson(newperson)
        }
        const onChangeLastName=(event)=>{
            const newperson={...person};
            newperson.last_name=event.target.value;
            setperson(newperson)
        }
    return(
        <>
        <div className="container">
            <div className="form-group">
            <label for="first_name">First Name</label>
            <input type="text" id="first_name" className="form-control" value={person.first_name} onChange={onChangeBox}/>
            </div>
            <div className="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" id="last_name"className="form-control" value={person.last_name} onChange={onChangeBox}/>
            </div>
            <div>Full Name: {person.first_name} {person.last_name}</div>
        </div>
        </>
    )
}
export default FullName;