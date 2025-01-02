package main

import (
	"fmt"
	"strconv"
	"strings"
)

// TODO: answer here

func DeliveryOrder(data []string, day string) map[string]float32 {
	res := make(map[string]float32)
	for _, v := range data {
		convertData := strings.Split(v, ":")
		firstName := convertData[0]
		lasttName := convertData[1]
		price, _ := strconv.ParseFloat(convertData[2], 32)
		locationCode := convertData[3]

		if locationCode == "JKT" {
			if day == "minggu"{
				continue	
			} 
		}

		if locationCode == "BDG" {
			if !(day == "rabu" || day == "kamis" || day == "sabtu"){
				continue	
			} 
		}

		if locationCode == "BKS" {
			if !(day == "selasa" || day == "kamis" || day == "jumat"){
				continue	
			} 
		}

		if locationCode == "DPK" {
			if !(day == "senin" || day == "selasa"){
				continue	
			} 
		}

		if day == "senin" || day == "rabu" || day == "jumat"{
			price = (price * 10/100) + price
		} else if day == "selasa" || day == "kamis" || day == "sabtu"{
			price = (price * 5/100) + price
		}


		res[firstName + "-" + lasttName] = float32(price)
	}
	return res // TODO: replace this
}

func main() {
	data := []string{
		"Andi:Sukirman:15000:DPK", 
		"Anggi:Anggraini:20000:BDG", 
		"Andi:Gunawan:40000:BKS", 
		"Budi:Gunawan:50000:JKT",
	}

	day := "minggu"

	deliveryData := DeliveryOrder(data, day)

	fmt.Println(deliveryData)
}
