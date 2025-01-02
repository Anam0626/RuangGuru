package main

import "fmt"

type Employee interface {
	GetBonus() float64
}

type Junior struct {
	Name         string
	BaseSalary   int
	WorkingMonth int
}

type Senior struct {
	Name         string
	BaseSalary   int
	WorkingMonth int
	PerformanceRate float64
}

type Manager struct {
	Name         string
	BaseSalary   int
	WorkingMonth int
	PerformanceRate float64
	BonusManagerRate float64
}

func prorata(workingMonth int) float64 {
	if workingMonth > 12 {
		return 1.0 
	}
	return float64(workingMonth) / 12.0
}

func (j Junior) GetBonus() float64 {
	return float64(j.BaseSalary) * prorata(j.WorkingMonth)
}

func (s Senior) GetBonus() float64 {
	baseBonus := 2 * float64(s.BaseSalary) * prorata(s.WorkingMonth)
	performanceBonus := s.PerformanceRate * float64(s.BaseSalary)
	return baseBonus + performanceBonus
}

func (m Manager) GetBonus() float64 {
	baseBonus := 2 * float64(m.BaseSalary) * prorata(m.WorkingMonth)
	performanceBonus := m.PerformanceRate * float64(m.BaseSalary)
	managerBonus := m.BonusManagerRate * float64(m.BaseSalary)
	return baseBonus + performanceBonus + managerBonus
}

func EmployeeBonus(employee Employee) float64 {
	return employee.GetBonus()
}

func TotalEmployeeBonus(employees []Employee) float64 {
	var total float64
	for _, employee := range employees {
		total += employee.GetBonus()
	}
	return total
}

func main() {
	irul := Junior{
		Name:         "Irul",
		BaseSalary:   1000,
		WorkingMonth: 6,
	}

	anam := Senior{
		Name:         "Anam",
		BaseSalary:   2000,
		WorkingMonth: 12,
		PerformanceRate: 0.5,
	}

	aziz := Manager{
		
		Name:         "Aziz",
		BaseSalary:   3000,
		WorkingMonth: 18, 
		PerformanceRate: 0.7,
		BonusManagerRate: 0.3,
	}

	employees := []Employee{irul, anam, aziz,}

	fmt.Println(EmployeeBonus(irul))
	fmt.Println(EmployeeBonus(anam))
	fmt.Println(EmployeeBonus(aziz))
	fmt.Println(TotalEmployeeBonus(employees))
}
