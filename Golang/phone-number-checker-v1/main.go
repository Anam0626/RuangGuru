package main

import (
	"fmt"
	"strings"
)

func PhoneNumberChecker(number string, result *string) {
	if len(number) >= 10 {
		if (number[0] == '6' && number[1] == '2' && number[2] == '8') || 
			(number[0] == '0' && number[1] == '8'){
			if strings.Contains(number, "0811") || strings.Contains(number, "0812") || strings.Contains(number, "0813") || strings.Contains(number, "0814") || strings.Contains(number, "0815") || 
				strings.Contains(number, "62811") || strings.Contains(number, "62812") || strings.Contains(number, "62813") || strings.Contains(number, "62814") || strings.Contains(number, "62815"){
				*result = "Telkomsel"
			} else if strings.Contains(number, "0816") || strings.Contains(number, "0817") || strings.Contains(number, "0818") || strings.Contains(number, "0819") || 
				strings.Contains(number, "62816") || strings.Contains(number, "62817") || strings.Contains(number, "62818") || strings.Contains(number, "62819"){
				*result = "Indosat"
			} else if strings.Contains(number, "0821") || strings.Contains(number, "0822") || strings.Contains(number, "0823") || 
				strings.Contains(number, "62821") || strings.Contains(number, "62822") || strings.Contains(number, "62823") {
				*result = "XL"
			} else if strings.Contains(number, "0827") || strings.Contains(number, "0828") || strings.Contains(number, "0818") || strings.Contains(number, "0829") || 
				strings.Contains(number, "62827") || strings.Contains(number, "62828") || strings.Contains(number, "62818") || strings.Contains(number, "62829"){
				*result = "Tri"
			} else if strings.Contains(number, "0852") || strings.Contains(number, "0853")|| 
				strings.Contains(number, "62852") || strings.Contains(number, "62853"){
				*result = "AS"
			} else if strings.Contains(number, "0881") || strings.Contains(number, "0882") || strings.Contains(number, "0883") || strings.Contains(number, "0884") || strings.Contains(number, "0885") || strings.Contains(number, "0886") || strings.Contains(number, "0887") || strings.Contains(number, "0888") ||  
				strings.Contains(number, "62881") || strings.Contains(number, "62882") || strings.Contains(number, "62883") || strings.Contains(number, "62884") || strings.Contains(number, "62885") || strings.Contains(number, "62886") || strings.Contains(number, "62887") || strings.Contains(number, "62888"){
				*result = "Smartfren"
			} else {
				*result = "invalid"
			} 
			
		} 
	} else {
		*result = "invalid"
	}
}

func main() {
	// bisa digunakan untuk pengujian test case
	var number = "08993456123"
	var result string

	PhoneNumberChecker(number, &result)
	fmt.Println(result)
}
