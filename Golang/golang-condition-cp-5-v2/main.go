package main

import "fmt"

func TicketPlayground(height, age int) int {
	result := 10000
	if age < 5 {
		result = -1
	} 
	if age >= 5 || height > 120 {
		result += 5000
		} 
		if age >= 8 || height > 135 {
			result += 10000
			} 
	if age >= 10 || height > 150 {
		result = 40000
	} 
	if age == 12 || height > 160 {
		result = 60000
	}
	if age > 12 {
		result = 100000
	}
	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(TicketPlayground(136, 13))
}
