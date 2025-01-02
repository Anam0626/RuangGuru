package main

import "fmt"

func ExchangeCoin(amount int) []int {
	coins := [9]int{1000, 500, 200, 100, 50, 20, 10, 5, 1}

	remainingAmount := amount 
	res := []int{}

	for i := 0; i < len(coins); i++ {
		if remainingAmount >= coins[i] {
			res = append(res, coins[i])
			remainingAmount -= coins[i]
			i--
		}
	}
	
	return res
}

func main (){
	fmt.Println(ExchangeCoin(0))
}

