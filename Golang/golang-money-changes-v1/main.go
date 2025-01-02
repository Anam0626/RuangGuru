package main

import "fmt"

type Product struct {
	Name  string
	Price int
	Tax   int
}


func MoneyChanges(amount int, products []Product) []int {
	res := make([]int, 0)
	coins := [9]int{1000, 500, 200, 100, 50, 20, 10, 5, 1}
	totalCost := 0

	for _, product := range products {
		totalCost += product.Price + product.Tax
	}

	moneyBack := amount - totalCost

	for i := 0; i < len(coins); i++ {
		if moneyBack >= coins[i] {
			res = append(res, coins[i])
			moneyBack -= coins[i]
			i--
		}
	}
	return res
}

func main(){
	products := []Product{
		{Name: "baju", Price: 1000, Tax: 100},
		{Name: "Celana", Price: 3000, Tax: 10},
		{Name: "susu", Price: 2000, Tax: 0},
	}
	fmt.Println(MoneyChanges(10000, products))
}
