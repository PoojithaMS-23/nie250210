package main

import (
	//"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
)

type Emp struct{
	Id string
	Name string
	Designation string
	Technology string
	Salary float32
	Commission float32
	Phone int
}
func createEmployee(c*gin.Context){
	var jbodyEmp Emp
	
	err := c.BindJSON(&jbodyEmp)
	if err !=nil{
		c.JSON(http.StatusInternalServerError,
			gin.H{"error":"Server Error."+err.Error()})
		return
	}
	createdEmployee:=Emp{Id: "101", Name: "Rohan", Designation: "Developer", Technology: "IT", Salary: 23000.0, Commission: 180.0, Phone: 98767899}
	c.JSON(http.StatusCreated,
	gin.H{"message" : "Employee Created Successfully.","employee" : createdEmployee})
}
func updateEmployee(c*gin.Context){
	id :=c.Param("id")
	var jbodyEmp Emp
	
	err := c.BindJSON(&jbodyEmp)
	if err !=nil{
		c.JSON(http.StatusInternalServerError,
			gin.H{"error":"Server Error."+err.Error()})
		return
	}
	createdEmployee:=Emp{Id: id, Name: "Rohan", Designation: "Developer", Technology: "IT", Salary: 23000.0, Commission: 180.0, Phone: 98767899}
	c.JSON(http.StatusCreated,
	gin.H{"message" : "Employee updated Successfully.","employee" : createdEmployee})
}
func deleteEmployee(c*gin.Context){
	
	c.JSON(http.StatusCreated,
	gin.H{"message" : "Employee deleted Successfully."})
}
func readAllEmployees(c *gin.Context) {
	employees := []Emp{
		{Id: "101", Name: "Rohan", Designation: "Developer", Technology: "IT", Salary: 23000.0, Commission: 180.0, Phone: 98767899},
		{Id: "101", Name: "Rohan", Designation: "Developer", Technology: "IT", Salary: 23000.0, Commission: 180.0, Phone: 98767899}}

	c.JSON(http.StatusOK, employees)
}
func readEmployee(c *gin.Context) {
	id:=c.Param("id")
	employees :=Emp{Id: id, Name: "Rohan", Designation: "Developer", Technology: "IT", Salary: 23000.0, Commission: 180.0, Phone: 98767899}

	c.JSON(http.StatusOK, employees)
}
func main() {
	//roter
	r := gin.Default()
	//routes|API Endpoints
	r.GET("/employees", readAllEmployees)
	r.GET("/employees/:id", readEmployee)
	//r.GET("/flights/:id",readFlighById)
	r.POST("/employees",createEmployee)
	r.PUT("/employees/:id",updateEmployee)
	r.DELETE("/employees/:id",deleteEmployee)
	//server
	r.Run(":8080")

	/*flight1 := Flight {Id:"101",Number:"AI 845",AirlineName:"AirIndia",Source:"Mumbai",Destination: "Abu dabi",Capacity: 180,Price: 15000.0}
	fmt.Println(flight1)*/
}
