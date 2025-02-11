import PageHeader from "../header/PageHeader";

function EmpEdit() {
    return (
        <>
        <PageHeader/>
            <h3><a href="/emps/list"><button className="btn btn-secondary">go back</button></a>Add an Employee</h3>
            <div className="container">
                <div className=" form-control mb-3">
                    <label htmlFor="id" className="form-label">id</label>
                    <div type="text" className="form-control" id="id" >???</div>
                </div>
                <div className=" form-control mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <div type="text" className="form-control" id="name">???</div>
                </div>
                <div className=" form-control mb-3">
                    <label htmlFor="designation" className="form-label">Designation</label>
                    <div type="text" className="form-control" id="designation">???</div>
                </div>
                <div className=" form-control mb-3">
                    <label htmlFor="technology" className="form-label">Technology</label>
                    <div type="text" className="form-control" id="technology">???</div>
                </div>
                <div className=" form-control mb-3">
                    <label htmlFor="salary" className="form-label">Salary</label>
                    <input type="text" className="form-control" id="salary" placeholder="enter the salary" />
                </div>
                <div className=" form-control mb-3">
                    <label htmlFor="commission" className="form-label">Commission</label>
                    <div type="text" className="form-control" id="commission">???</div>
                </div>
                <div className=" form-control mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <div type="text" className="form-control" id="phone">???</div>
                </div>
                <button className="btn btn-warning">update</button>
            </div>
        </>
    )
}
export default EmpEdit;