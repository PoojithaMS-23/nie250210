package main

import (
	//"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Flight struct {
	Id          string
	Number      string
	AirlineName string
	Source      string
	Destination string
	Capacity    int
	Price       float32
}
func createFlight(c*gin.Context){
	var jbodyFlight Flight
	
	err := c.BindJSON(&jbodyFlight)
	if err !=nil{
		c.JSON(http.StatusInternalServerError,
			gin.H{"error":"Server Error."+err.Error()})
		return
	}
	createdFlight:=Flight{Id: "103", Number: "AI 844", AirlineName: "AirAsia", Source: "Mumbai", Destination: "Bengalauru", Capacity: 170, Price: 13000.0}
	c.JSON(http.StatusCreated,
	gin.H{"message" : "Flight Created Successfully.","flight" : createdFlight})
}
func updateFlight(c*gin.Context){
	id :=c.Param("id")
	var jbodyFlight Flight
	
	err := c.BindJSON(&jbodyFlight)
	if err !=nil{
		c.JSON(http.StatusInternalServerError,
			gin.H{"error":"Server Error."+err.Error()})
		return
	}
	updatedFlight:=Flight{Id: id, Number: "AI 844", AirlineName: "AirAsia", Source: "Mumbai", Destination: "Bengalauru", Capacity: 170, Price: 13000.0}
	c.JSON(http.StatusOK,
	gin.H{"message" : "Flight updated Successfully.","flight" : updatedFlight})
}
func deleteFlight(c*gin.Context){
	//id :=c.Param("id")
	
	c.JSON(http.StatusOK,
	gin.H{"message" : "Flight deleted Successfully.",})
}

func readAllFlights(c *gin.Context) {
	flights := []Flight{
		{Id: "101", Number: "AI 845", AirlineName: "AirIndia", Source: "Mumbai", Destination: "Abu dabi", Capacity: 180, Price: 15000.0},
		{Id: "102", Number: "AI 345", AirlineName: "Indigo", Source: "Mumbai", Destination: "Chennai", Capacity: 180, Price: 19000.0}}

	c.JSON(http.StatusOK, flights)
}
func readFlightById(c *gin.Context) {
	id:=c.Param("id")
	flight := Flight{Id: id, Number: "AI 845", AirlineName: "AirIndia", Source: "Mumbai", Destination: "Abu dabi", Capacity: 180, Price: 15000.0}
		

	c.JSON(http.StatusOK, flight)
}

func main() {
	//roter
	r := gin.Default()
	//routes|API Endpoints
	r.GET("/flights", readAllFlights)
	r.GET("/flights/:id",readFlightById)
	r.POST("/flights",createFlight)
	r.PUT("/flights/:id",updateFlight)
	r.DELETE("/flights/:id",deleteFlight)
	//server
	r.Run(":8080")

	/*flight1 := Flight {Id:"101",Number:"AI 845",AirlineName:"AirIndia",Source:"Mumbai",Destination: "Abu dabi",Capacity: 180,Price: 15000.0}
	fmt.Println(flight1)*/
}
