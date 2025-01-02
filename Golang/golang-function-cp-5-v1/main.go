package main

import (
	"fmt"
)

func FindMin(nums ...int) int {
	result:=1000000
	for _, num := range nums {
		if num < result{
			result = num
		}
	}
	return result
}

func FindMax(nums ...int) int {
	result:=0
	for _, num := range nums {
		if num > result{
			result = num
		}
	}
	return result
}

func SumMinMax(nums ...int) int {
	// min := FindMin(nums ...)
	fmt.Println(FindMin(nums ...))
	fmt.Println(FindMax(nums ...))
	return FindMin(nums ...) + FindMax(nums ...)
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(SumMinMax(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
}
