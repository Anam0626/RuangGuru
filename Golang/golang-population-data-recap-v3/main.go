package main

import (
	"fmt"
	"strconv"
	"strings"
)

func PopulationData(data []string) []map[string]any {
	res := []map[string]any{}
	for _, v := range data {
		currentRes := make(map[string]any)
		dataSplit := strings.Split(v, ";")
		name := dataSplit[0]
		age, _ := strconv.Atoi(dataSplit[1])
		address := dataSplit[2]
		height, _ := strconv.ParseFloat(dataSplit[3], 64)
		isMarried, _ := strconv.ParseBool(dataSplit[4])

		currentRes["name"] = name
		currentRes["age"] = age
		currentRes["address"] = address
		if dataSplit[3] != "" {
			currentRes["height"] = height
		}
		if dataSplit[4] != "" {
			currentRes["isMarried"] = isMarried
		}

		res = append(res, currentRes)
	}
	return res // TODO: replace this
}

func main(){
	data := []string{
		"Budi;23;Jakarta;;",
		"Joko;30;Bandung;;true", 
		"Susi;25;Bogor;165.42;",
	}
	fmt.Println(PopulationData(data))
}