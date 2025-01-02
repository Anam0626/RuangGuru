package main

import "fmt"

// hello World => d_l_r_o_W o_l_l_e_H
func ReverseString(str string) string {
	var reverse string
	var result string

	for i:=len(str) ; i > 0 ; i-- {
		reverse += string(str[i-1])
	}

	for i:=0 ; i<len(reverse) ; i++{
		if i < len(reverse){
			if reverse[i] != ' ' && i != len(reverse)-1 && reverse[i+1] != ' '{
				result += string(reverse[i]) + "_"
			} else {
				result += string(reverse[i])
			}
		}
	}

	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(ReverseString("Hello World"))
}
