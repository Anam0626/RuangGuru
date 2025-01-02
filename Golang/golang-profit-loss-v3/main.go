package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func Readfile(path string) ([]string, error) {
	file, err := os.ReadFile(path)
	if err != nil {
		return nil, err
	}
	fileSplit := strings.Split(string(file), "\n")
	if fileSplit[0] == ""{
		return []string{}, nil
	}
	return fileSplit, nil // TODO: replace this
}

func CalculateProfitLoss(data []string) string {
	var result string
	totalIncome := 0
	totalExpense := 0
	date := ""
	for i, v := range data {
		dataSplit := strings.Split(v, ";")

		if dataSplit[1] == "income" {
			income, _ := strconv.Atoi(dataSplit[2])
			totalIncome += income
		} else {
			expense, _ := strconv.Atoi(dataSplit[2])
			totalExpense += expense
		}

		if i == len(data)-1 {
			date = dataSplit[0]
		}
	}

	if totalIncome - totalExpense > 0 {
		result = fmt.Sprintf("%s;profit;%d", date, (totalIncome-totalExpense))
	} else {
		result = fmt.Sprintf("%s;loss;%d", date, (totalExpense-totalIncome))
	}
	return result
}

func main() {
	// bisa digunakan untuk pengujian
	datas, err := Readfile("transactions.txt")
	if err != nil {
		panic(err)
	}

	result := CalculateProfitLoss(datas)
	fmt.Println(result)
}
