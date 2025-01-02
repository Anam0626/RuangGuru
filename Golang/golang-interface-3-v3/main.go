package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Time struct {
	Hour   int
	Minute int
}


func ChangeToStandartTime(time any) string {
	var hour, minute int
	timeInfo := "AM"

	switch time.(type) {
	case string:
		splitTime := strings.Split(time.(string), ":")
		if len(splitTime) != 2 || splitTime[1] == "" {
			return "Invalid input"
		}
		hour, _ = strconv.Atoi(splitTime[0])
		minute, _ = strconv.Atoi(splitTime[1])
	case []int:
		if len(time.([]int)) != 2 {
			return "Invalid input"
		}
		hour = time.([]int)[0]
		minute = time.([]int)[1]
	case map[string]int:
		var okHour, okMinute bool
		hour, okHour = time.(map[string]int)["hour"]
		minute, okMinute = time.(map[string]int)["minute"]
		if !okHour || !okMinute {
			return "Invalid input"
		}
		
	case Time:
		hour = time.(Time).Hour
		minute = time.(Time).Minute
	}

	if hour < 0 || hour > 23 || minute < 0 || minute > 59 {
		return "Invalid input"
	}

	if hour >= 12 {
		timeInfo = "PM"
		if hour > 12 {	
			hour -= 12
		}
	} 

	return fmt.Sprintf("%02d:%02d %s", hour, minute, timeInfo)
}

func main() {
	fmt.Println(ChangeToStandartTime("23:"))
	fmt.Println(ChangeToStandartTime([]int{16, 0}))
	fmt.Println(ChangeToStandartTime(map[string]int{"hour": 23}))
	fmt.Println(ChangeToStandartTime(Time{16, 0}))
}
