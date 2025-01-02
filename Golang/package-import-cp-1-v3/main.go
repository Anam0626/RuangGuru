package main

import (
	"a21hc3NpZ25tZW50/internal"
	"fmt"
	"strconv"
	"strings"
)


func AdvanceCalculator(calculate string) float32 {
	splitInput := strings.Split(calculate, " ")
	if len(splitInput) == 0 {
		return 0
	}
	num, _ := strconv.ParseFloat(splitInput[0], 32)
	calculator := internal.NewCalculator(float32(num))
	
	for i := 1; i < len(splitInput); i+=2 {
		operator := splitInput[i]
		operand, _ := strconv.ParseFloat(splitInput[i+1], 32)

		switch operator {
		case "+":
			calculator.Add(float32(operand))
		case "-":
			calculator.Subtract(float32(operand))
		case "/":
			calculator.Divide(float32(operand))
		case "*":
			calculator.Multiply(float32(operand))
		}
	}
	return float32(calculator.Result())
}

func main() {
	res := AdvanceCalculator("3 * 4 / 2 + 10 - 5")

	fmt.Println(res)
}
