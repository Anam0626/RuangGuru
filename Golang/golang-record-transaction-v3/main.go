package main

import (
	"fmt"
	"os"
	"sort"
	"strings"
)

type Transaction struct {
	Date   string
	Type   string
	Amount int
}

func RecordTransactions(path string, transactions []Transaction) error {
	if len(transactions) == 0 {
		return nil
	}
	sort.Slice(transactions, func(i, j int) bool {
		if transactions[i].Date < transactions[j].Date {
			return true
		} else {
			return false
		}
	})
	lastDate := transactions[0].Date
	money := 0
	result := make([]string, 0)
	for _, transaction := range transactions {
		if transaction.Date == lastDate {
			if transaction.Type == "income" {
				money += transaction.Amount
			} else {
				money -= transaction.Amount
			}
		} else {
			if money > 0 {
				result = append(result, fmt.Sprintf("%s;income;%d", lastDate, money))
			} else {
				result = append(result, fmt.Sprintf("%s;expense;%d", lastDate, -money))
			}
			money = 0
			if transaction.Type == "income" {
				money += transaction.Amount
			} else {
				money -= transaction.Amount
			}
			lastDate = transaction.Date
		}
	}
	if money > 0 {
		result = append(result, fmt.Sprintf("%s;income;%d", lastDate, money))
	} else {
		result = append(result, fmt.Sprintf("%s;expense;%d", lastDate, -money))
	}


	file, err := os.Create(path) 
	if err != nil {
		return err
	}
	defer file.Close()

	_, err2 := file.WriteString(strings.Join(result, "\n"))
	if err2 != nil {
		return err2
	}
	return nil // TODO: replace this
}


func main() {
	// bisa digunakan untuk pengujian test case
	var transactions = []Transaction{
		{"01/01/2021", "income", 100000},
		{"01/01/2021", "expense", 50000},
		{"01/01/2021", "expense", 30000},
		{"01/01/2021", "income", 20000},
	}

	err := RecordTransactions("transactions.txt", transactions)
	if err != nil {
		panic(err)
	}

	fmt.Println("Success")
}