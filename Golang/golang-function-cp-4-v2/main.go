package main

import (
	"fmt"
	"strings"
)

func FindSimilarData(input string, data ...string) string {
	var matches []string
	for _, i := range data {
		if strings.Contains(i, input) {
			matches = append(matches, i)
		}
	}
	return strings.Join(matches, ",")
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(FindSimilarData("iphone", "laptop", "iphone 13", "iphone 12", "iphone 12 pro"))
}
