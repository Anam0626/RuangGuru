package main

import (
	"encoding/json"
	"fmt"
	"os"
)

type Study struct {
	StudyName string`json:"study_name"`
	StudyCredit int	`json:"study_credit"`
	Grade string	`json:"grade"`
}

type Report struct {
	// TODO: answer here
	Id string		`json:"id"`
	Name string		`json:"name"`
	Date string		`json:"date"`
	Semester int	`json:"semester"`
	Studies []Study	`json:"studies"`
}


// gunakan fungsi ini untuk mengambil data dari file json
// kembalian berupa struct 'Report' dan error
func ReadJSON(filename string) (Report, error) {
	// TODO: answer here
	file, err := os.ReadFile(filename)
	if err != nil {
		return Report{}, err
	}
	var jsonData = []byte(file)
	var report Report
	errUnmarshal := json.Unmarshal(jsonData, &report)
	if errUnmarshal != nil {
		return Report{}, err
	}
	
	return report, nil
}

func GradePoint(report Report) float64 {
	totalStudyCredit := 0
	totalGrade := 0.0
	for _, v := range report.Studies {
		totalStudyCredit += v.StudyCredit
		if v.Grade == "A" {
			totalGrade += float64(4*v.StudyCredit)
		} else if v.Grade == "AB" {
			totalGrade += float64(3.5*float64(v.StudyCredit))
		} else if v.Grade == "B" {
			totalGrade += float64(3*v.StudyCredit)
		} else if v.Grade == "BC" {
			totalGrade += float64(2.5*float64(v.StudyCredit))
		} else if v.Grade == "C" {
			totalGrade += float64(2*v.StudyCredit)
		} else if v.Grade == "CD" {
			totalGrade += float64(1.5*float64(v.StudyCredit))
		} else if v.Grade == "D" {
			totalGrade += float64(1*v.StudyCredit)
		} else if v.Grade == "DE" {
			totalGrade += float64(0.5*float64(v.StudyCredit))
		} else {
			totalGrade += float64(0*v.StudyCredit)
		}
	}	
	if totalStudyCredit > 0 {
		return totalGrade/float64(totalStudyCredit)
	}
	return 0.0
}

func main() {
	// bisa digunakan untuk menguji test case
	report, err := ReadJSON("report.json")
	if err != nil {
		panic(err)
	}

	gradePoint := GradePoint(report)
	fmt.Println(gradePoint)
}
