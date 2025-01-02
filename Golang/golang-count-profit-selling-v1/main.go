package main

import "fmt"

func CountProfit(data [][][2]int) []int {
	if len(data) == 0 {
		return []int{}
	}
	numMonths := len(data[0])

	totalProfits := make([]int, numMonths)

	for _, branch := range data {
		for monthIdx, month := range branch {
			profit := month[0] - month[1] 
			totalProfits[monthIdx] += profit 
		}
	}

	return totalProfits
}

func main() {
	data := [][][2]int{{{1000, 500}, {500, 200}}, {{1200, 200}, {1000, 800}}, {{500, 100}, {700, 100}}}
	fmt.Println(CountProfit(data)) // Output yang diharapkan: [1900, 1100]
}
