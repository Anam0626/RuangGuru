package main

import (
	"fmt"
	"sort"
)

type School struct {
	Name string
	Address string
	Grades []int
}

func (s *School) AddGrade(grades ...int) {
	s.Grades = append(s.Grades, grades...)
}

func Analysis(s School) (float64, int, int) {
	if len(s.Grades) == 0 {
		return 0.0, 0, 0
	}
	var avg float64
	var max int
	var min int

	sort.Ints(s.Grades)
	min = s.Grades[0]
	max = s.Grades[len(s.Grades)-1]
	
	sum := 0
	for _, grade := range s.Grades {
		sum += grade
	}
	avg = float64(sum) / float64(len(s.Grades))


	return avg, min, max // TODO: replace this
}

// gunakan untuk melakukan debugging
func main() {
	s := School{
		Name:    "Imam Assidiqi School",
		Address: "Jl. Imam Assidiqi",
		Grades:  []int{100, 90, 80, 70, 60},
	}
	avg, min, max := Analysis(s)

	s.AddGrade(0,0)

	fmt.Println(avg, min, max)
}
