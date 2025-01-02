package main

import "fmt"

func SchedulableDays(villager [][]int) []int {
	availableDate := make(map[int]int)
	res := []int{}
	for _, v := range villager {
		for _, tanggal := range v {
			availableDate[tanggal]++
		}
	}
	for k, v := range availableDate {
		if v == len(villager) {
			res = append(res, k)
		}
	}
	return res
}

func main(){
	fmt.Println(SchedulableDays([][]int{{7, 12, 19, 22}, {12, 19, 21, 23}, {7, 12, 19}, {12, 19}}))
}