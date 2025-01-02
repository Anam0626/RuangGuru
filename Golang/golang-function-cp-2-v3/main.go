package main

import (
	"fmt"
)

func CountVowelConsonant(str string) (int, int, bool) {
	vokal := 0
	notVokal := 0
	var isNothingVokal bool

	for i := 0; i < len(str); i++ {
		if str[i] != ' ' && str[i] != ','{
			if str[i] == 'A' || str[i] == 'a' ||
				str[i] == 'I' || str[i] == 'i' ||
				str[i] == 'U' || str[i] == 'u' ||
				str[i] == 'E' || str[i] == 'e' ||
				str[i] == 'O' || str[i] == 'o' {
				vokal++
			} else {
				notVokal++
			}
		}
	}
	if vokal > 0 {
		isNothingVokal = false
	} else {
		isNothingVokal = true
	}
	return vokal, notVokal, isNothingVokal // TODO: replace this
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(CountVowelConsonant("'SEMANGAT PAGI, itu kata orang yang baru datang ke rumahku"))
}
