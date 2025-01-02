package main

import "fmt"

func EmailInfo(email string) string {
	var domain string
	var tld string
	for i := 0; i < len(email); i++ {
		if email[i] == '@'{
			for j := i+1 ; j < len(email); j++ {
				if email[j] != '.'{
					domain += string(email[j])
				} else {
					for x := j+1; x < len(email); x++ {
						tld += string(email[x])
					}
					break
				}
			}
		}	
	}
	result := "Domain: " + domain + " dan TLD: " + tld
	return result
}

// gunakan untuk melakukan debug
func main() {
	fmt.Println(EmailInfo("admin@yahoo.co.id"))
}
