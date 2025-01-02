package main

import "fmt"

func MapToSlice(mapData map[string]string) [][]string {
	res := [][]string{}
	for k, v := range mapData {
		element := []string{k, v}
		res = append(res, element)
	}
	return res // TODO: replace this
}

func main() {
	mapData := map[string]string{
		"hello": "world", 
		"John": "Doe", 
		"age":"14",
	}

	fmt.Println(MapToSlice(mapData))
}