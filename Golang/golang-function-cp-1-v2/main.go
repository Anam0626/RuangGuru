package main

import (
	"fmt"
	"strconv"
)

func DateFormat(day, month, year int) string {
	var formatDay string
	var formatMonth string
	formatYear := strconv.Itoa(year)
	if day < 10 {
		formatDay = "0"+strconv.Itoa(day) 	
	} else {
		formatDay = strconv.Itoa(day)
	}
	switch month {
	case 1:
		formatMonth = "January"
	case 2:
		formatMonth = "February"
	case 3:
		formatMonth = "March"
	case 4:
		formatMonth = "April"
	case 5:
		formatMonth = "May"
	case 6:
		formatMonth = "June"
	case 7:
		formatMonth = "July"
	case 8:
		formatMonth = "August"
	case 9:
		formatMonth = "September"
	case 10:
		formatMonth = "October"
	case 11:
		formatMonth = "November"
	case 12:
		formatMonth = "December"
	}
	result := formatDay+"-"+formatMonth+"-"+formatYear

	return result // TODO: replace this
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(DateFormat(1, 1, 2012))
}
