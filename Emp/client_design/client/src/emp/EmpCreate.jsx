import PageHeader from "../header/PageHeader"

function EmpCreate() {
  return (
    <>
    <PageHeader PageNumber={2}/>
      <h3><a href="/emps/list"><button className="btn btn-secondary">go back</button></a>Add an Employee</h3>
      <div className="container">
        <div className=" form-control mb-3">
          <label htmlFor="id" className="form-label">id</label>
          <input type="text" className="form-control" id="id" placeholder="Enter the id" />
        </div>
        <div className=" form-control mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" placeholder="enter your Name" />
        </div>
        <div className=" form-control mb-3">
          <label htmlFor="designation" className="form-label">Designation</label>
          <input type="text" className="form-control" id="designation" placeholder="Enter your designation" />
        </div>
        <div className=" form-control mb-3">
          <label htmlFor="technology" className="form-label">Technology</label>
          <input type="text" className="form-control" id="technology" placeholder="enetr the technology" />
        </div>
        <div className=" form-control mb-3">
          <label htmlFor="salary" className="form-label">Salary</label>
          <input type="text" className="form-control" id="salary" placeholder="enter the salary" />
        </div>
        <div className=" form-control mb-3">
          <label htmlFor="commission" className="form-label">Commission</label>
          <input type="text" className="form-control" id="commission" placeholder="enter the commission" />
        </div>
        <div className=" form-control mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" placeholder="enter your phone" />
        </div>
      </div>

    </>
  )
}
export default EmpCreate