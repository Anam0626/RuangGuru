package main

import "fmt"

func SlurredTalk(words *string) {
	result := ""
	for _, v := range *words {
		if v == 'S' || v == 'R' || v == 'Z'{
			result += "L"
		} else if v == 's' || v == 'r' || v == 'z'{
			result += "l"
		} else {
			result += string(v)
		}
	}
	*words = result
}

func main() {
	// bisa dicoba untuk pengujian test case
	var words string = "Saya Steven, saya suka menggoreng telur dan suka hewan zebra"
	SlurredTalk(&words)
	fmt.Println(words)
}
