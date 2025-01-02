package main

import "fmt"

func SchedulableDays(date1 []int, date2 []int) []int {
	res := []int{}

	for _, date_1 := range date1 {
		for _, date_2 := range date2 {
			if date_1 == date_2 {
				res = append(res, date_1)
			}
		}
	}

	return res // TODO: replace this
}

func main(){
	date1 := []int{1,2,3,4}
	date2 := []int{3,4,5}
	fmt.Println(SchedulableDays(date1, date2))
}
