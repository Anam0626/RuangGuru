package main

import (
	"fmt"
	"strings"
)

func FindShortestName(names string) string {
	var splitNames[]string
	if strings.Contains(names, " ") {
		splitNames = strings.Split(names, " ")
	} else if strings.Contains(names, ","){
		splitNames = strings.Split(names, ",")
	} else if strings.Contains(names, ";"){
		splitNames = strings.Split(names, ";")
	}

	result := splitNames[0]
	head := len(splitNames[0])

	for _, name := range splitNames {
		if len(name) < head{
			head = len(name)
			result = name
		} else if head == len(name) {
			if name < result {
				result = name
			}
		}
	}

	return result// TODO: replace this
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(FindShortestName("Ari,Aru,Ara,Andi,Asik")) // "Tio"
	// fmt.Println(FindShortestName("Budi;Tia;Tio"))                         // "Tia"
}
