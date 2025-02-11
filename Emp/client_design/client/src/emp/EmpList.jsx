import PageHeader from "../header/PageHeader";


function EmpList() {
    return (
        
        <>
            <PageHeader PageNumber={1}/>
            <h3>List of Employees</h3>
            <div class="container">
                <table class="table table-primary table-striped">
                    <thead class="table-dark">
                        <tr >
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Technology</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Commission</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col"></th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">109</th>
                            <td>Manohar</td>
                            <td>Professor</td>
                            <td>IT</td>
                            <td>20000</td>
                            <td>...</td>
                            <td>8905678921</td>
                            <td><a href="/emps/edit/90"><button class="btn btn-warning">edit</button></a>
                                <button class="btn btn-danger">delete</button></td>

                        </tr>
                        <tr>
                            <th scope="row">209</th>
                            <td>Jacob</td>
                            <td>Accountant</td>
                            <td>Economis</td>
                            <td>30000</td>
                            <td>...</td>
                            <td>9087563234</td>
                            <td><a href="/emps/edit/89"><button class="btn btn-warning">edit</button></a>
                                <button class="btn btn-danger">delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default EmpList;