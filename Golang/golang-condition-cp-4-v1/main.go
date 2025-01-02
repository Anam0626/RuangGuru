package main

import "fmt"

func GetTicketPrice(VIP, regular, student, day int) float32 {
	var result float32 = ((float32(VIP)*30) + (float32(regular)*20) + (float32(student)*10))
	if result > 100 {
		if day % 2 == 1{
			if (VIP+regular+student) < 5 {
				result -= (((float32(VIP)*30) + (float32(regular)*20) + (float32(student)*10)) * 15/100)
			} else {
				result -= (((float32(VIP)*30) + (float32(regular)*20) + (float32(student)*10)) * 25/100)
			} 
		} else if day % 2 == 0 {
			if (VIP+regular+student) < 5 {
				result -= (((float32(VIP)*30) + (float32(regular)*20) + (float32(student)*10)) * 10/100)
			} else {
				result -= (((float32(VIP)*30) + (float32(regular)*20) + (float32(student)*10)) * 20/100)
			} 
		}
	} 
	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(GetTicketPrice(1, 1, 1, 20))
}
