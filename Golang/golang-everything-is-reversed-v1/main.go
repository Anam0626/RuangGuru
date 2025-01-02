package main

import (
	"fmt"
	"strconv"
)

func reverseArray(arr [5]int) [5]int{
	res := [5]int{}

	for i, _ := range arr {
		res[i] = arr[len(arr)-1-i]
	}

	return res
}

func reverseNum(num int) int{
	var res int
	convertString := strconv.Itoa(num)
	var digit string
	for i := len(convertString)-1; i >= 0; i-- {
		digit += string(convertString[i])
	}
	res, _ = strconv.Atoi(digit)
	return res
}

func ReverseData(arr [5]int) [5]int {
	res := [5]int{}
	newArray := reverseArray(arr)
	for i, v := range newArray {
		res[i] = reverseNum(v)
	}

	return res
}

func main() {
	array := [5]int{123, 456, 11, 1, 2}
	fmt.Println(ReverseData(array))
}
