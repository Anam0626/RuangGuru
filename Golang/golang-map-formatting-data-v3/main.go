package main

import (
	"fmt"
	"strconv"
	"strings"
)

// TODO: answer here

func ChangeOutput(data []string) map[string][]string {
	res := make(map[string][]string)
	for _, v := range data {
		splitData := strings.Split(v, "-")
		header := splitData[0]
		index, _ := strconv.Atoi(splitData[1])
		position := splitData[2]
		value := splitData[3]

		if _, ok := res[header]; !ok {
			res	[header] = make([]string, 0)
		}
		if position == "first" {
			if index >= len(res[header]) {
				res[header] = append(res[header], value)
			} else {
				res[header][index] = value + res[header][index]
			}
		} else {
			if index >= len(res[header]) {
				res[header] = append(res[header], value)
			} else {
				res[header][index] = res[header][index] + " " + value
			}
			
		}
	}

	return res // TODO: replace this
}

// bisa digunakan untuk melakukan debug
func main() {
	data := []string{"account-0-first-John", "account-0-last-Doe", "account-1-first-Jane", "account-1-last-Doe", "address-0-first-Jaksel", "address-0-last-Jakarta", "address-1-first-Bandung", "address-1-last-Jabar", "phone-0-first-081234567890", "phone-1-first-081234567891"}
	res := ChangeOutput(data)

	fmt.Println(res)
}
