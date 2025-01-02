package main

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"io"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"
	"errors"

	"a21hc3NpZ25tZW50/helper"
	"a21hc3NpZ25tZW50/model"
)

type StudentManager interface {
	Login(id string, name string) error
	Register(id string, name string, studyProgram string) error
	GetStudyProgram(code string) (string, error)
	ModifyStudent(name string, fn model.StudentModifier) error
}

type InMemoryStudentManager struct {
	sync.Mutex
	students             []model.Student
	studentStudyPrograms map[string]string
	//add map for tracking login attempts here
	failedLoginAttempts  map[string]int
}

func NewInMemoryStudentManager() *InMemoryStudentManager {
	return &InMemoryStudentManager{
		students: []model.Student{
			{
				ID:           "A12345",
				Name:         "Aditira",
				StudyProgram: "TI",
			},
			{
				ID:           "B21313",
				Name:         "Dito",
				StudyProgram: "TK",
			},
			{
				ID:           "A34555",
				Name:         "Afis",
				StudyProgram: "MI",
			},
		},
		studentStudyPrograms: map[string]string{
			"TI": "Teknik Informatika",
			"TK": "Teknik Komputer",
			"SI": "Sistem Informasi",
			"MI": "Manajemen Informasi",
		},
		//inisialisasi failedLoginAttempts di sini:
		failedLoginAttempts: make(map[string]int),
	}
}

func ReadStudentsFromCSV(filename string) ([]model.Student, error) {
	file, err := os.Open(filename)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	reader := csv.NewReader(file)
	reader.FieldsPerRecord = 3 // ID, Name and StudyProgram

	var students []model.Student
	for {
		record, err := reader.Read()
		if err == io.EOF {
			break
		}
		if err != nil {
			return nil, err
		}

		student := model.Student{
			ID:           record[0],
			Name:         record[1],
			StudyProgram: record[2],
		}
		students = append(students, student)
	}
	return students, nil
}

func (sm *InMemoryStudentManager) GetStudents() []model.Student {
	res := []model.Student{}
	res = append(res, sm.students...)
	return res  
}

func (sm *InMemoryStudentManager) Login(id string, name string) (string, error) {
	sm.Lock()
	defer sm.Unlock()
	if sm.failedLoginAttempts[id] >= 3 {
		return "", fmt.Errorf("Login gagal: Batas maksimum login terlampaui")
	}

	for _, student := range sm.students {
		if student.ID == id && student.Name == name {
			sm.failedLoginAttempts[id] = 0
			studyProgram, _ := sm.GetStudyProgram(student.StudyProgram)
			return fmt.Sprintf("Login berhasil: Selamat datang %s! Kamu terdaftar di program studi: %s", name, studyProgram), nil
		}
	}
	sm.failedLoginAttempts[id]++
	return "", errors.New("Login gagal: data mahasiswa tidak ditemukan")
}

func (sm *InMemoryStudentManager) RegisterLongProcess() {
	// 30ms delay to simulate slow processing
	time.Sleep(30 * time.Millisecond)
}

func (sm *InMemoryStudentManager) Register(id string, name string, studyProgram string) (string, error) {
	// 30ms delay to simulate slow processing. DO NOT REMOVE THIS LINE
	sm.RegisterLongProcess()

	// Below lock is needed to prevent data race error. DO NOT REMOVE BELOW 2 LINES
	sm.Lock()
	defer sm.Unlock()

	if id == "" || name == "" || studyProgram == ""{
		return "", errors.New("ID, Name or StudyProgram is undefined!")
	}
	if _, ok := sm.studentStudyPrograms[studyProgram]; !ok {
		return "", fmt.Errorf("Study program %s is not found", studyProgram)
	}
	for _, student := range sm.students {
		if student.ID == id {
			return "", errors.New("Registrasi gagal: id sudah digunakan")
		}
	}
	sm.students = append(sm.students, model.Student{
		ID: id,
		Name: name,
		StudyProgram: studyProgram,
	})
	return fmt.Sprintf("Registrasi berhasil: %s (%s)", name, studyProgram), nil 		
}

func (sm *InMemoryStudentManager) GetStudyProgram(code string) (string, error) {
	if code == "" {
		return "", errors.New("Code is undefined!")
	}
	if programName, ok := sm.studentStudyPrograms[code]; ok{
		return programName, nil
	}
	return "", errors.New("Kode program studi tidak ditemukan")
}

func (sm *InMemoryStudentManager) ModifyStudent(name string, fn model.StudentModifier) (string, error) {
	for i := range sm.students {
		if sm.students[i].Name == name {
			err := fn(&sm.students[i])
			if err != nil {
				return "", err
			}
			return "Program studi mahasiswa berhasil diubah.", nil
		}
	}
	return "", errors.New("Mahasiswa tidak ditemukan.")
}

func (sm *InMemoryStudentManager) ChangeStudyProgram(programStudi string) model.StudentModifier {
	return func(s *model.Student) error {
		if _, ok := sm.studentStudyPrograms[programStudi]; !ok {
			return errors.New("Program studi tidak ditemukan.")
		}
		s.StudyProgram = programStudi
		return nil
	}
}

func (sm *InMemoryStudentManager) ImportStudents(filenames []string) error {
	errorChanel := make(chan error)
	var studentQty int
	var studentsData []model.Student

	for _, filename := range filenames {
		students, _ := ReadStudentsFromCSV(filename)
		studentsData = append(studentsData, students...)
		studentQty += len(students)
	}

	var wg sync.WaitGroup
	for _, student := range studentsData {
		wg.Add(1)
		go func(student model.Student) {
			defer wg.Done()
			if _, err := sm.Register(student.ID, student.Name, student.StudyProgram); err != nil {
				errorChanel <- err
				return
			}
		}(student)
	}

	go func() {
		wg.Wait()
		close(errorChanel)
	}()

	for err := range errorChanel {
		if err != nil {
			return err
		}
	}

	return nil

}

func (sm *InMemoryStudentManager) SubmitAssignmentLongProcess() {
	// 3000ms delay to simulate slow processing
	time.Sleep(30 * time.Millisecond)
}

func (sm *InMemoryStudentManager) SubmitAssignments(numAssignments int) {
	start := time.Now()

	jobs := make(chan int, numAssignments)
	var wg sync.WaitGroup

	worker := func(workerID int) {
		defer wg.Done()
		for assignment := range jobs {
			sm.SubmitAssignmentLongProcess()
			fmt.Printf("Worker %d selesai mengerjakan tugas %d\n", workerID, assignment)
		}
	}

	numWorkers := 2
	for i := 1; i <= numWorkers; i++ {
		wg.Add(1)
		go worker(i)
	}

	for i := 1; i <= numAssignments; i++ {
		jobs <- i
	}
	close(jobs)

	wg.Wait()
	elapsed := time.Since(start)
	fmt.Printf("Pengumpulan %d tugas selesai dalam %s\n", numAssignments, elapsed)
}




func main() {
	manager := NewInMemoryStudentManager()

	for {
		helper.ClearScreen()
		students := manager.GetStudents()
		for _, student := range students {
			fmt.Printf("ID: %s\n", student.ID)
			fmt.Printf("Name: %s\n", student.Name)
			fmt.Printf("Study Program: %s\n", student.StudyProgram)
			fmt.Println()
		}

		fmt.Println("Selamat datang di Student Portal!")
		fmt.Println("1. Login")
		fmt.Println("2. Register")
		fmt.Println("3. Get Study Program")
		fmt.Println("4. Modify Student")
		fmt.Println("5. Bulk Import Student")
		fmt.Println("6. Submit assignment")
		fmt.Println("7. Exit")

		reader := bufio.NewReader(os.Stdin)
		fmt.Print("Pilih menu: ")
		input, _ := reader.ReadString('\n')
		input = strings.TrimSpace(input)

		switch input {
		case "1":
			helper.ClearScreen()
			fmt.Println("=== Login ===")
			fmt.Print("ID: ")
			id, _ := reader.ReadString('\n')
			id = strings.TrimSpace(id)

			fmt.Print("Name: ")
			name, _ := reader.ReadString('\n')
			name = strings.TrimSpace(name)

			msg, err := manager.Login(id, name)
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			}
			fmt.Println(msg)
			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "2":
			helper.ClearScreen()
			fmt.Println("=== Register ===")
			fmt.Print("ID: ")
			id, _ := reader.ReadString('\n')
			id = strings.TrimSpace(id)

			fmt.Print("Name: ")
			name, _ := reader.ReadString('\n')
			name = strings.TrimSpace(name)

			fmt.Print("Study Program Code (TI/TK/SI/MI): ")
			code, _ := reader.ReadString('\n')
			code = strings.TrimSpace(code)

			msg, err := manager.Register(id, name, code)
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			}
			fmt.Println(msg)
			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "3":
			helper.ClearScreen()
			fmt.Println("=== Get Study Program ===")
			fmt.Print("Program Code (TI/TK/SI/MI): ")
			code, _ := reader.ReadString('\n')
			code = strings.TrimSpace(code)

			if studyProgram, err := manager.GetStudyProgram(code); err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			} else {
				fmt.Printf("Program Studi: %s\n", studyProgram)
			}
			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "4":
			helper.ClearScreen()
			fmt.Println("=== Modify Student ===")
			fmt.Print("Name: ")
			name, _ := reader.ReadString('\n')
			name = strings.TrimSpace(name)

			fmt.Print("Program Studi Baru (TI/TK/SI/MI): ")
			code, _ := reader.ReadString('\n')
			code = strings.TrimSpace(code)

			msg, err := manager.ModifyStudent(name, manager.ChangeStudyProgram(code))
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			}
			fmt.Println(msg)

			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "5":
			helper.ClearScreen()
			fmt.Println("=== Bulk Import Student ===")

			// Define the list of CSV file names
			csvFiles := []string{"students1.csv", "students2.csv", "students3.csv"}

			err := manager.ImportStudents(csvFiles)
			if err != nil {
				fmt.Printf("Error: %s\n", err.Error())
			} else {
				fmt.Println("Import successful!")
			}

			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')

		case "6":
			helper.ClearScreen()
			fmt.Println("=== Submit Assignment ===")

			// Enter how many assignments you want to submit
			fmt.Print("Enter the number of assignments you want to submit: ")
			numAssignments, _ := reader.ReadString('\n')

			// Convert the input to an integer
			numAssignments = strings.TrimSpace(numAssignments)
			numAssignmentsInt, err := strconv.Atoi(numAssignments)

			if err != nil {
				fmt.Println("Error: Please enter a valid number")
			}

			manager.SubmitAssignments(numAssignmentsInt)

			// Wait until the user presses any key
			fmt.Println("Press any key to continue...")
			reader.ReadString('\n')
		case "7":
			helper.ClearScreen()
			fmt.Println("Goodbye!")
			return
		default:
			helper.ClearScreen()
			fmt.Println("Pilihan tidak valid!")
			helper.Delay(5)
		}

		fmt.Println()
	}
}
