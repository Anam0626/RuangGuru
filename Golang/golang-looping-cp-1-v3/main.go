package main

import "fmt"

func CountingNumber(n int) float64 {
	result := 0.0
	head := 1.0
	for i:=0 ; i < ((n*2)-1) ; i++{
		result += head
		head += 0.5
	}
	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(CountingNumber(10))
}
