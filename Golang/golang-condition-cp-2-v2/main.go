package main

import "fmt"

func BMICalculator(gender string, height int) float64 {
	result := 0.0 
	if gender == "laki-laki"{
		result = (float64(height)-100)-((float64(height)-100) * 10/100)
	} else if gender == "perempuan"{
		result = (float64(height)-100)-((float64(height)-100) * 15/100)
	}
	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(BMICalculator("laki-laki", 165))
	fmt.Println(BMICalculator("perempuan", 165))
}
