package main

import "fmt"

func GetPredicate(math, science, english, indonesia int) string {
	average := ((math+science+english+indonesia) / 4)
	var res string
	switch {
		case average == 100:
			res = "Sempurna"
		case average >= 90:
			res = "Sangat Baik"
		case average >= 80:
			res = "Baik"
		case average >= 70:
			res = "Cukup"
		case average >= 60:
			res = "Kurang"
		case average < 60:
			res = "Sangat kurang"
	}
	return res
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(GetPredicate(50, 80, 100, 60))
}
