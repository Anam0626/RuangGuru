package main

import (
	"fmt"
	"strings"
	"unicode"
)

func ReverseWord(str string) string {
	words := strings.Split(str, " ") 
	var result []string              

	for _, word := range words {
		if len(word) == 0 {
			continue
		}

		reversed := []rune(word)
		for i, j := 0, len(reversed)-1; i < j; i, j = i+1, j-1 {
			reversed[i], reversed[j] = reversed[j], reversed[i]
		}

		if isAllUpper(word) {
			result = append(result, strings.ToUpper(string(reversed)))
		} else if unicode.IsUpper(rune(word[0])) {
			reversedWord := strings.ToUpper(string(reversed[0])) + strings.ToLower(string(reversed[1:]))
			result = append(result, reversedWord)
		} else {
			result = append(result, strings.ToLower(string(reversed)))
		}
	}

	return strings.Join(result, " ")
}

func isAllUpper(word string) bool {
	for _, c := range word {
		if !unicode.IsUpper(c) {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(ReverseWord("Aku Sayang Ibu"))           
	fmt.Println(ReverseWord("A bird fly to Germany and got a worm")) 
}
